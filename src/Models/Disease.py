from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
import pickle
app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})
api = Api(app)
model = pickle.load(open('src\Models\PCOS.sav', 'rb'))
class Predict(Resource):
    def post(self):
        data = request.get_json()
        age = float(data['age'])
        weight = float(data['weight'])
        height = float(data['height'])
        cyclelength = float(data['cyclelength'])
        weightgain = float(data['weightgain'])
        hairloss = float(data['hairloss'])
        pimples = float(data['pimples'])
        exercise = float(data['exercise'])
        fastfood = float(data['fastfood'])
        hairgrowth = float(data['hairgrowth'])
        skindark = float(data['skindark'])
        waist = float(data['waist'])
        hip = float(data['hip'])
        bmi = float(data['bmi'])
        processed_data = [float(data[key]) for key in data]
        pred = model.predict([processed_data])[0]
        pred = float(pred)

        return {'prediction': pred}
api.add_resource(Predict, '/predict')

if __name__ == "__main__":
    app.run(debug=True)