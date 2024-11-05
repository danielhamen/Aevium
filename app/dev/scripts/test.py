import requests
import os
import subprocess

# Base URL for each .ts file
base_url = "https://movie2.randchange.top/hls/2016/moana/Moana_2016_PG_tt3521164_277834_Bluray-1080p-"
file_extension = ".ts"

# Folder to store downloaded .ts files
os.makedirs("ts_files", exist_ok=True)

# Define the range of segments to download
start_segment = 1   # Starting segment number
end_segment = 1000  # Ending segment number (adjust according to the video)

# Download each .ts file
for i in range(start_segment, end_segment + 1):
    segment_url = f"{base_url}{str(i).zfill(4)}{file_extension}"
    response = requests.get(segment_url, stream=True)

    if response.status_code == 200:
        with open(f"ts_files/segment_{i}.ts", "wb") as f:
            f.write(response.content)
        print(f"Downloaded segment {i}")
    else:
        print(f"Segment {i} not found, stopping download.")
        break

# Concatenate downloaded .ts files into a single file list
with open("file_list.txt", "w") as file_list:
    for i in range(start_segment, end_segment + 1):
        ts_file_path = f"ts_files/segment_{i}.ts"
        if os.path.exists(ts_file_path):
            file_list.write(f"file '{ts_file_path}'\n")

# Convert to .mkv using ffmpeg
output_file = "Moana_2016.mkv"
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", "file_list.txt",
    "-c", "copy", output_file
])

# Clean up
print(f"Download and merge complete. Video saved as {output_file}")
