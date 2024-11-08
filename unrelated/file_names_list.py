import os


def list_directory_contents(directory_path):
    try:
        with open("output.txt", "w") as output_file:
            for root, dirs, files in os.walk(directory_path):
                output_file.write(f"Directory: {root}\n")
                output_file.write("Subdirectories:\n")
                for dir_name in dirs:
                    output_file.write(f"  {dir_name}\n")
                output_file.write("Files:\n")
                for file_name in files:
                    output_file.write(f"  {file_name}\n")
                output_file.write("\n")
        print(f"Directory listing saved to output.txt")
    except Exception as e:
        print(f"An error occurred: {e}")


# Example usage:
directory_to_scan = r"D:\Code\kenyAInspire---team-HassDonn\frontend\public\kalasik"  # Replace with the path of the folder you want to scan
list_directory_contents(directory_to_scan)
