import React, { useState } from "react";
import axios from "axios";
import "./BreastCancerPredictionForm.css";

const BreastCancerPredictionForm = () => {
  const [formData, setFormData] = useState({
    mean_radius: "",
    mean_texture: "",
    mean_perimeter: "",
    mean_area: "",
    mean_smoothness: "",
    mean_compactness: "",
    mean_concavity: "",
    mean_concave_points: "",
    mean_symmetry: "",
    mean_fractal_dimension: "",
    radius_error: "",
    texture_error: "",
    perimeter_error: "",
    area_error: "",
    smoothness_error: "",
    compactness_error: "",
    concavity_error: "",
    concave_points_error: "",
    symmetry_error: "",
    fractal_dimension_error: "",
    worst_radius: "",
    worst_texture: "",
    worst_perimeter: "",
    worst_area: "",
    worst_smoothness: "",
    worst_compactness: "",
    worst_concavity: "",
    worst_concave_points: "",
    worst_symmetry: "",
    worst_fractal_dimension: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        input_data: formData,
        predictionType: "breastCancer",
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction", error);
      alert("An error occurred while making the prediction.");
    }
  };

  return (
    <div className="body">
      <div className="form-container">
        <h1>Breast Cancer Prediction</h1>
        <form onSubmit={handleSubmit}>
          {/* Input fields for breast cancer prediction */}
          <label>
            Mean Radius:
            <input
              type="number"
              name="mean_radius"
              value={formData.mean_radius}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Texture:
            <input
              type="number"
              name="mean_texture"
              value={formData.mean_texture}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Perimeter:
            <input
              type="number"
              name="mean_perimeter"
              value={formData.mean_perimeter}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Area:
            <input
              type="number"
              name="mean_area"
              value={formData.mean_area}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Smoothness:
            <input
              type="number"
              name="mean_smoothness"
              value={formData.mean_smoothness}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Compactness:
            <input
              type="number"
              name="mean_compactness"
              value={formData.mean_compactness}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Concavity:
            <input
              type="number"
              name="mean_concavity"
              value={formData.mean_concavity}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Concave Points:
            <input
              type="number"
              name="mean_concave_points"
              value={formData.mean_concave_points}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Symmetry:
            <input
              type="number"
              name="mean_symmetry"
              value={formData.mean_symmetry}
              onChange={handleChange}
            />
          </label>
          <label>
            Mean Fractal Dimension:
            <input
              type="number"
              name="mean_fractal_dimension"
              value={formData.mean_fractal_dimension}
              onChange={handleChange}
            />
          </label>
          <label>
            Radius Error:
            <input
              type="number"
              name="radius_error"
              value={formData.radius_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Texture Error:
            <input
              type="number"
              name="texture_error"
              value={formData.texture_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Perimeter Error:
            <input
              type="number"
              name="perimeter_error"
              value={formData.perimeter_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Area Error:
            <input
              type="number"
              name="area_error"
              value={formData.area_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Smoothness Error:
            <input
              type="number"
              name="smoothness_error"
              value={formData.smoothness_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Compactness Error:
            <input
              type="number"
              name="compactness_error"
              value={formData.compactness_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Concavity Error:
            <input
              type="number"
              name="concavity_error"
              value={formData.concavity_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Concave Points Error:
            <input
              type="number"
              name="concave_points_error"
              value={formData.concave_points_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Symmetry Error:
            <input
              type="number"
              name="symmetry_error"
              value={formData.symmetry_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Fractal Dimension Error:
            <input
              type="number"
              name="fractal_dimension_error"
              value={formData.fractal_dimension_error}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Radius:
            <input
              type="number"
              name="worst_radius"
              value={formData.worst_radius}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Texture:
            <input
              type="number"
              name="worst_texture"
              value={formData.worst_texture}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Perimeter:
            <input
              type="number"
              name="worst_perimeter"
              value={formData.worst_perimeter}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Area:
            <input
              type="number"
              name="worst_area"
              value={formData.worst_area}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Smoothness:
            <input
              type="number"
              name="worst_smoothness"
              value={formData.worst_smoothness}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Compactness:
            <input
              type="number"
              name="worst_compactness"
              value={formData.worst_compactness}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Concavity:
            <input
              type="number"
              name="worst_concavity"
              value={formData.worst_concavity}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Concave Points:
            <input
              type="number"
              name="worst_concave_points"
              value={formData.worst_concave_points}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Symmetry:
            <input
              type="number"
              name="worst_symmetry"
              value={formData.worst_symmetry}
              onChange={handleChange}
            />
          </label>
          <label>
            Worst Fractal Dimension:
            <input
              type="number"
              name="worst_fractal_dimension"
              value={formData.worst_fractal_dimension}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Get Prediction</button>
        </form>
        {prediction !== null && (
          <div
            className={`prediction-result ${
              prediction === "Malignant" ? "high-risk" : ""
            }`}
          >
            <h2>Prediction:</h2>
            <p>
              {prediction === "Malignant"
                ? "The tumor is Malignant"
                : "The tumor is Benign"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreastCancerPredictionForm;
