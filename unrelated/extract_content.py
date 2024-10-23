import os

EXCLUDED_FOLDERS = {"node_modules", ".git"}
EXCLUDED_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".svg",
    ".gif",
    ".db",
    ".md",
    ".json",
    ".sqlite",
}
EXCLUDED_FILES = {
    "package.json",
    "package-lock.json",
    ".gitignore",
    "vite.config.js",
    "eslint.config.js",
    "index.html",
}


def write_file_paths_and_content(root_directory, output_file):
    with open(output_file, "w", encoding="utf-8") as out_file:
        for foldername, subfolders, filenames in os.walk(root_directory):
            # Remove excluded folders from traversal
            subfolders[:] = [d for d in subfolders if d not in EXCLUDED_FOLDERS]
            for filename in filenames:
                file_path = os.path.join(foldername, filename)
                # Skip files with excluded extensions or specific excluded files
                if (
                    any(filename.endswith(ext) for ext in EXCLUDED_EXTENSIONS)
                    or filename in EXCLUDED_FILES
                ):
                    continue
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        file_content = f.read()
                except Exception as e:
                    file_content = f"Could not read file: {e}"
                out_file.write(f"{file_path}\n")
                out_file.write(
                    """
```
"""
                )
                out_file.write(file_content)
                out_file.write(
                    """
```
"""
                )
                out_file.write("\n\n")


if __name__ == "__main__":
    root_directory = r"D:\Code\kenyAInspire---team-HassDonn\frontend"  # Change this to your root folder
    output_file = r"D:\Code\kenyAInspire---team-HassDonn\unrelated\frontend.txt"  # Ensure this is a valid file path
    write_file_paths_and_content(root_directory, output_file)
    print(f"File paths and contents written to {output_file}")
