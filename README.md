## YAWI - You-Are-Worth-It
## Features
1. **Menstrual Health:**
   - Track menstrual cycles, receive mood swing tips, and self-care suggestions.
2. **Healthcare:**
   - Early detection focus, access info on PCOS, Breast Cancer, and Cervical Cancer.
3. **Leisure & Relaxation:**
   - Sensory rooms, movie recommendations, EmoSense for emotions.
4. **Learning Section:**
5. **Autism-Friendly Features:**
   - Visual schedule, social norms guidance, positive affirmations.
     
Getting Started
<hr>
To get started with Yawi, follow these steps:
1) Clone the repository<br>
2) Install dependencies: `npm install` and  `npm install  cors @fortawesome/fontawesome-svg-core @tensorflow/tfjs @tensorflow-models/blazeface` and `pip install uvicorn tensorflow fer scikit-learn opencv-python numpy pandas fastapi` <br>
3) `cd src` and run `node Server.js` to start the main server. <br>
4) `cd src/components` directory and run `uvicorn emotion-detection:app --host  0.0.0.0 --port  8002` and `cd src/pages` and run `uvicorn 
     fastapi_script:app --host 0.0.0.0 --port 8084 --reload` <br>
5) `cd src/Models` and run `disease.py`<br>
6) Start the development server: `npm start`<br>

Note: Please ensure you have installed nodejs and have the .env file to run the complete application.

