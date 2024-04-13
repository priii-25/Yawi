import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import YAWI from "./pages/yawi";
import Learn from "./pages/Learn";
import Relax from "./pages/Relax";
import ImageDisplay from "./pages/ImageDisplay";
import VideoPage from "./pages/VideoDisplay";
import EmotionDetection from './components/EmotionDetection';
import PCOSPredictionForm from "./Models/PCOSPredictionForm";
import MoodSelector from "./pages/Periods/MoodSelector";
import Q2 from "./pages/Periods/Q2";
import Eat from "./pages/Periods/Eat";
import Yoga from "./pages/Periods/yoga";
import Healthcare from "./pages/Healthcare";
import Menstrual from "./pages/Menstrual";
import { ColorPicker, DrawingCanvas } from "./components/DrawingComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import BreastCancerPredictionForm from "./Models/BreastCancerPredictionForm";
import CervicalCancerForm from "./Models/CervicalCancer";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const action = useNavigationType();
  const [color, setColor] = useState("#000000");
  const [drawingData, setDrawingData] = useState([]);
  const [toolMode, setToolMode] = useState("pen");
  const [penSize, setPenSize] = useState(5);
  const [eraserSize, setEraserSize] = useState(10);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the home page.";
        break;
      case "/yawi":
        title = "Auti Embrace";
        metaDescription = "Experience the Auti Embrace.";
        break;
      case "/learn":
        title = "Learn";
        metaDescription = "";
        break;
      case "/relax":
        title = "Relax";
        metaDescription = "";
        break;
      case "/img":
        title = "Img";
        metaDescription = "";
        break;
      case "/video/:name":
        title = "video";
        metaDescription = "";
        break;
      case "/pcos":
        title = "video";
        metaDescription = "";
        break;
      case "/mood":
        title = "mood";
        metaDescription = "";
        break;
      case "/Q2":
          title = "Q2";
          metaDescription = "";
          break;
      
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const toggleToolMode = () => {
    setToolMode((prevMode) => (prevMode === "pen" ? "eraser" : "pen"));
  };

  const handlePenSizeChange = (event) => {
    setPenSize(parseInt(event.target.value, 10));
  };

  const handleEraserSizeChange = (event) => {
    setEraserSize(parseInt(event.target.value, 10));
  };
  return (
    <Routes>
      <Route path="/" element={<YAWI />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/relax" element={<Relax />} />
      <Route path="/img" element={<ImageDisplay />} />
      <Route path="/video/:videoName" element={<VideoPage />} />
      <Route path="/emotion-recognition" element={<EmotionDetection />} />
      <Route path="/pcos" element={<PCOSPredictionForm />} />
      <Route path="/mood" element={<MoodSelector/>} />
      <Route path="/Q2" element={<Q2/>} />
      <Route path="/eat" element={<Eat/>} />
      <Route path="/yoga" element={<Yoga/>} />
      <Route path="/healthcare" element={<Healthcare/>} />
      <Route path="/menstrual" element={<Menstrual/>} />
      <Route
        path="/draw"
        element={
          <div className="App">
            <h1>Simple Drawing App</h1>
            <div className="controls">
              <ColorPicker
                selectedColor={color}
                onColorChange={handleColorChange}
              />
              <label htmlFor="penSizeSlider">Pen Size:</label>
              <input
                id="penSizeSlider"
                type="range"
                min="1"
                max="50"
                value={penSize}
                onChange={handlePenSizeChange}
              />
              <label htmlFor="eraserSizeSlider">Eraser Size:</label>
              <input
                id="eraserSizeSlider"
                type="range"
                min="1"
                max="50"
                value={eraserSize}
                onChange={handleEraserSizeChange}
              />
              <button onClick={toggleToolMode}>
                <FontAwesomeIcon icon={faEraser} />
              </button>
            </div>
            <DrawingCanvas
              color={color}
              onUpdateDrawing={setDrawingData}
              toolMode={toolMode}
              penSize={penSize}
              eraserSize={eraserSize}
            />
          </div>
        }
      />
      <Route path="/BreastCancer" element={<BreastCancerPredictionForm/>} />
      <Route path="/cervicalCancer" element={<CervicalCancerForm/>} />
    </Routes>
  );
}

export default App;
