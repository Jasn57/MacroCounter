from flask import Flask, request, jsonify  # import flask and other
from flask_cors import CORS  # frontend to talk to backend

app = Flask(__name__)  # create the flask app
CORS(app)  # enable cors

# memory storage for macros
macros = {"protein": 0, "fats": 0, "carbs": 0}

# get route: send current macros as json
@app.route('/api/macros', methods=['GET'])
def get_macros():
    return jsonify(macros)

# update macros with data sent from frontend
@app.route('/api/macros', methods=['POST'])
def set_macros():
    data = request.get_json()  # read json from request
    macros.update(data)  # update the macros dictionary
    return jsonify({"status": "saved", "macros": macros})

# ttart the server on port 3000
if __name__ == '__main__':
    app.run(port=3000)
