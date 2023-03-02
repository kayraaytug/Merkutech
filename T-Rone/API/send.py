import requests
from datetime import datetime
# Send data to server
new_data = {"battery": 21,
            "animal_alert": True,
            "weed_alert": False,
            "datetime": str(datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
            "alerts": 1}

response = requests.post("http://127.0.0.1:5000/data", json=new_data)
if response.status_code == 201:
    print("Data sent successfully: " , new_data)
else:
    print("Failed to send data")
