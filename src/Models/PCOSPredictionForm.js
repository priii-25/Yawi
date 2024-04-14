import React, { useState } from 'react';
import axios from 'axios';
import './PCOSPredictionForm.css';

const PCOSPredictionForm = () => {
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        height: '',
        cyclelength: '',
        weightgain: '',
        hairloss: '',
        pimples: '',
        exercise: '',
        fastfood: '',
        hairgrowth: '',
        skindark: '',
        waist: '',
        hip: '',
        bmi: '',
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict', formData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error making prediction', error);
            alert('An error occurred while making the prediction.');
        }
    };
    return (
        <div className="body">
        <div className="form-container">
            <h1>Polysistic Ovarian Syndrome Prediction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
                <label>
                    Weight:
                    <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
                </label>
                <label>
                    Height:
                    <input type="number" name="height" value={formData.height} onChange={handleChange} />
                </label>
                <label>
                    Cycle Length:
                    <input type="number" name="cyclelength" value={formData.cyclelength} onChange={handleChange} />
                </label>
                <label>
                    Weight Gain:
                    <select name="weightgain" value={formData.weightgain} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <label>
                    Hair Loss:
                    <select name="hairloss" value={formData.hairloss} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <label>
                    Pimples:
                    <select name="pimples" value={formData.pimples} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <label>
                    Exercise:
                    <select name="exercise" value={formData.exercise} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <label>
                    Fast Food:
                    <select name="fastfood" value={formData.fastfood} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <label>
                    Hair Growth:
                    <select name="hairgrowth" value={formData.hairgrowth} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <label>
                    Skin Dark:
                    <select name="skindark" value={formData.skindark} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <label>
                    Waist:
                    <input type="number" name="waist" value={formData.waist} onChange={handleChange} />
                </label>
                <label>
                    Hip:
                    <input type="number" name="hip" value={formData.hip} onChange={handleChange} />
                </label>
                <label>
                    BMI:
                    <input type="number" name="bmi" value={formData.bmi} onChange={handleChange} />
                </label>
                <button type="submit">Get Prediction</button>
            </form>
            {prediction !== null && (
            <div className={`prediction-result ${prediction === 0 ? 'high-risk' : ''}`}>
                <h2>Prediction:</h2>
                <p>{prediction === 0 ? 'Visit a doctor and get yourself tested for PCOS' : 'Low risk of PCOS'}</p>
            </div>
        )}
        </div>
        </div>
    );
};

export default PCOSPredictionForm;
