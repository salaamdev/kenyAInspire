import os

# Excluded folders, extensions, and specific files
EXCLUDED_FOLDERS = {
    "node_modules",
    ".git",
    "animations",
    # "assets",
    ".github",
}
# "pageStyles",
# "componentStyles",

EXCLUDED_EXTENSIONS = {
    # ".jpg",
    # ".jpeg",
    # ".png",
    # ".svg",
    # ".gif",
    # ".db",
    # ".md",
    # ".json",
}
# ".sqlite",
# ".PDF",
# ".pdf",
# ".css",

EXCLUDED_FILES = {
    "eslint.config.js",
}
# "package.json",
# "package-lock.json",
# ".gitignore",
# "vite.config.js",
# "index.html",
# "ErrorPage",


def extract_file_paths(root_directory, output_file):
    # List to store all file paths
    file_paths = []

    # Walk through all directories and files recursively
    for dirpath, dirnames, filenames in os.walk(root_directory):
        # Exclude directories listed in EXCLUDED_FOLDERS
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_FOLDERS]

        for file in filenames:
            # Check for excluded files or extensions
            if (
                file in EXCLUDED_FILES
                or os.path.splitext(file)[1] in EXCLUDED_EXTENSIONS
            ):
                continue

            # Construct the full file path and append it to the list
            full_path = os.path.join(dirpath, file)
            file_paths.append(full_path)

    # Write all file paths to the output text file
    with open(output_file, "w") as file:
        for path in file_paths:
            file.write(f"{path}\n")

    print(f"All file paths have been written to {output_file}")


# Set your root directory and output file path
root_directory = r"../"  # Replace with your folder path
output_file = (
    r"./output/all_file_paths.txt"  # Replace with your desired output file name
)

# Call the function
extract_file_paths(root_directory, output_file)
