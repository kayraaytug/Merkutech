import requests
import time

# Retrieve data from server
while True:

    response = requests.get("http://127.0.0.1:5000/data")
    if response.status_code == 200:
        data = response.json()
        print(f"Retrieved data: {data}")
        if data['animal_alert'] == True:
            print("Animal alert")

    else:
        print("Failed to retrieve data")
    
    time.sleep(10)