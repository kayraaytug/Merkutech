from flask import Flask, request, jsonify

app = Flask(__name__)

data = {
    "alerts": 0,
    "battery": 0,
    "animal_alert": False,
    "weed_alert": False
}

@app.route("/data", methods=["GET", "POST"])
def handle_data():
    if request.method == "POST":
        data.update(request.json)
        #with open('log.json', 'a+') as f:
        #        json.dump(request.json, f)
        #        f.write("\n")

        return "Data received", 201
    else:
        return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)


#Run nginx : FLASK_APP=app.py FLASK_ENV=development flask run --host=0.0.0.0
