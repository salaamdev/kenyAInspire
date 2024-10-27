import os


def parse_directory_path(directory_path):
    # Normalize the path separators
    directory_path = directory_path.replace("\\", "/")
    parts = directory_path.split("/")
    try:
        kalasik_index = parts.index("kalasik")
    except ValueError:
        return None, None
    # Now, the parts after 'kalasik' are [grade, subject]
    if len(parts) > kalasik_index + 1:
        grade = parts[kalasik_index + 1]
    else:
        grade = None
    if len(parts) > kalasik_index + 2:
        subject = parts[kalasik_index + 2]
    else:
        subject = None
    return grade, subject


def get_relative_path(full_path):
    # Normalize the path separators
    full_path = full_path.replace("\\", "/")
    parts = full_path.split("/")
    try:
        kalasik_index = parts.index("kalasik")
    except ValueError:
        return None
    # The relative path is '/' + '/'.join(parts from 'kalasik')
    relative_path = "/" + "/".join(parts[kalasik_index:])
    return relative_path


def format_grade(grade):
    return grade.capitalize().replace("grade", "Grade ")


def format_subject(subject):
    return subject.title()


grades_dict = {}

current_grade = None
current_subject = None
current_directory = None
files_section = False

with open(
    r"D:\Code\kenyAInspire---team-HassDonn\unrelated\resources.txt",
    "r",
    encoding="utf-8",
) as f:
    lines = f.readlines()

i = 0
while i < len(lines):
    line = lines[i].strip()
    if line.startswith("Directory: "):
        current_directory = line[len("Directory: ") :].strip()
        current_grade, current_subject = parse_directory_path(current_directory)
        files_section = False
    elif line.startswith("Files:"):
        files_section = True
        i += 1
        while i < len(lines):
            file_line = lines[i].strip()
            if (
                file_line == ""
                or file_line.startswith("Directory: ")
                or file_line.startswith("Subdirectories:")
            ):
                files_section = False
                i -= 1  # To reprocess this line in the main loop
                break
            else:
                file_name = file_line
                full_file_path = os.path.join(current_directory, file_name)
                relative_file_path = get_relative_path(full_file_path)
                if current_grade and current_subject:
                    if current_grade not in grades_dict:
                        grades_dict[current_grade] = {}
                    if current_subject not in grades_dict[current_grade]:
                        grades_dict[current_grade][current_subject] = {}
                    # Check if the file is an ebook or outline
                    if "EBOOK.PDF" in file_name.upper():
                        grades_dict[current_grade][current_subject][
                            "ebook"
                        ] = relative_file_path
                    elif "OUTLINE.PDF" in file_name.upper():
                        grades_dict[current_grade][current_subject][
                            "outline"
                        ] = relative_file_path
                else:
                    pass  # Ignore files not under a grade and subject
            i += 1
    i += 1

# Now, generate the output string
output_lines = []
output_lines.append("const coursesData = [")

for grade in sorted(grades_dict.keys()):
    grade_formatted = format_grade(grade)
    output_lines.append("    {")
    output_lines.append(f'        grade: "{grade_formatted}",')
    output_lines.append("        subjects: [")
    for subject in sorted(grades_dict[grade].keys()):
        subject_formatted = format_subject(subject)
        subject_data = grades_dict[grade][subject]
        ebook = subject_data.get("ebook", "null")
        outline = subject_data.get("outline", "null")
        if ebook != "null":
            ebook = f'"{ebook}"'
        if outline != "null":
            outline = f'"{outline}"'
        output_lines.append("            {")
        output_lines.append(f'                name: "{subject_formatted}",')
        output_lines.append(f"                ebook: {ebook},")
        output_lines.append(f"                outline: {outline},")
        output_lines.append("            },")
    output_lines.append("        ],")
    output_lines.append("    },")
output_lines.append("];")
output_lines.append("")
output_lines.append("export default coursesData;")

# Write the output to coursesData.js
with open("coursesData.js", "w", encoding="utf-8") as f_out:
    f_out.write("\n".join(output_lines))

print("coursesData.js has been generated.")
