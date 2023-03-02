# import required libraries
from vidgear.gears import CamGear
from vidgear.gears import WriteGear, ScreenGear
import cv2

# define and open video source
stream = CamGear().start()

# define required FFmpeg parameters for your writer
output_params = {
    "-clones": ["-f", "lavfi", "-i", "anullsrc"],
    "-vcodec": "libx264",
    "-preset": "medium",
    "-b:v": "4500k",
    "-bufsize": "512k",
    "-pix_fmt": "yuv420p",
    "-f": "flv",
}

#Change your YouTube-Live Stream Key here:
YOUTUBE_STREAM_KEY = "YOUR STREAM KEY HERE"

# Define writer with defined parameters
writer = WriteGear(
    output="rtmp://a.rtmp.youtube.com/live2/{}".format(YOUTUBE_STREAM_KEY),
    logging=True,
    **output_params
)

# loop over
while True:

    # read frames from stream
    frame = stream.read()

    # check for frame if Nonetype
    if frame is None:
        break

    # {do something with the frame here}

    # write frame to writer
    writer.write(frame)

# safely close video stream
stream.stop()

# safely close writer
writer.close()