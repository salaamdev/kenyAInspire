import json


def add_course_id_to_courses_data(file_path):
    # Read the JSON file
    with open(file_path, "r") as file:
        courses_data = json.load(file)  # Directly read as JSON

    # Add course_id to each subject, starting from 1
    course_id_counter = 1
    for grade in courses_data:
        for subject in grade.get("subjects", []):
            subject["course_id"] = course_id_counter
            course_id_counter += 1

    # Convert back to a JSON string formatted for JavaScript
    formatted_json = json.dumps(courses_data, indent=4)

    # Create the updated file content with JavaScript format
    updated_content = (
        f"const coursesData = {formatted_json};\n\nexport default coursesData;"
    )

    # Write back to a .js file
    with open(
        "D:\\Code\\kenyAInspire---team-HassDonn\\unrelated\\courseData.txt", "w"
    ) as file:
        file.write(updated_content)


# Specify the path to your coursesData.json file
file_path = r"D:\Code\kenyAInspire---team-HassDonn\unrelated\courseData.json"
add_course_id_to_courses_data(file_path)
