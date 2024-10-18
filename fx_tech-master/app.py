import pickle
from flask import Flask, request, jsonify
from flask import Flask, jsonify
import sklearn
#from flask_cors import CORS

app = Flask(__name__)

@app.route('/')
def home():
    return "Prediction API"

# Load your model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction = model.predict([data['features']]) 
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)