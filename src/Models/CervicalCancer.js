import React, { useState } from 'react';
import "./Cc.css"
const CervicalCancerForm = () => {
 const [formData, setFormData] = useState({
    numberOfSexualPartners: '',
    firstSexualIntercourse: '',
    numOfPregnancies: '',
    smokes: '',
    smokesYears: '',
    smokesPacksYear: '',
    hormonalContraceptives: '',
    hormonalContraceptivesYears: '',
    iud: '',
    iudYears: '',
    stds: '',
    stdsNumber: '',
    stdsCondylomatosis: '',
    stdsCervicalCondylomatosis: '',
    stdsVaginalCondylomatosis: '',
    stdsVulvoPerinealCondylomatosis: '',
    stdsSyphilis: '',
    stdsPelvicInflammatoryDisease: '',
    stdsGenitalHerpes: '',
    stdsMolluscumContagiosum: '',
    stdsAIDS: '',
    stdsHIV: '',
    stdsHepatitisB: '',
    stdsHPV: '',
    stdsTimeSinceFirstDiagnosis: '',
    stdsTimeSinceLastDiagnosis: '',
    dxCancer: '',
    dxCIN: '',
    dxHPV: '',
    dx: '',
    hinselmann: '',
    citology: '',
    schiller: '',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend for processing
    console.log(formData);
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of sexual partners:
        <input type="number" name="numberOfSexualPartners" onChange={handleChange} />
      </label>
      <label>
        First sexual intercourse:
        <input type="number" name="firstSexualIntercourse" onChange={handleChange} />
      </label>
      <label>
        Number of pregnancies:
        <input type="number" name="numOfPregnancies" onChange={handleChange} />
      </label>
      <label>
        Smokes:
        <input type="number" name="smokes" onChange={handleChange} />
      </label>
      <label>
        Smokes (years):
        <input type="number" name="smokesYears" onChange={handleChange} />
      </label>
      <label>
        Smokes (packs/year):
        <input type="number" name="smokesPacksYear" onChange={handleChange} />
      </label>
      <label>
        Hormonal Contraceptives:
        <input type="number" name="hormonalContraceptives" onChange={handleChange} />
      </label>
      <label>
        Hormonal Contraceptives (years):
        <input type="number" name="hormonalContraceptivesYears" onChange={handleChange} />
      </label>
      <label>
        IUD:
        <input type="number" name="iud" onChange={handleChange} />
      </label>
      <label>
        IUD (years):
        <input type="number" name="iudYears" onChange={handleChange} />
      </label>
      <label>
        STDs:
        <input type="number" name="stds" onChange={handleChange} />
      </label>
      <label>
        STDs (number):
        <input type="number" name="stdsNumber" onChange={handleChange} />
      </label>
      <label>
        STDs: Condylomatosis:
        <input type="number" name="stdsCondylomatosis" onChange={handleChange} />
      </label>
      <label>
        STDs: Cervical Condylomatosis:
        <input type="number" name="stdsCervicalCondylomatosis" onChange={handleChange} />
      </label>
      <label>
        STDs: Vaginal Condylomatosis:
        <input type="number" name="stdsVaginalCondylomatosis" onChange={handleChange} />
      </label>
      <label>
        STDs: Vulvo-Perineal Condylomatosis:
        <input type="number" name="stdsVulvoPerinealCondylomatosis" onChange={handleChange} />
      </label>
      <label>
        STDs: Syphilis:
        <input type="number" name="stdsSyphilis" onChange={handleChange} />
      </label>
      <label>
        STDs: Pelvic Inflammatory Disease:
        <input type="number" name="stdsPelvicInflammatoryDisease" onChange={handleChange} />
      </label>
      <label>
        STDs: Genital Herpes:
        <input type="number" name="stdsGenitalHerpes" onChange={handleChange} />
      </label>
      <label>
        STDs: Molluscum Contagiosum:
        <input type="number" name="stdsMolluscumContagiosum" onChange={handleChange} />
      </label>
      <label>
        STDs: AIDS:
        <input type="number" name="stdsAIDS" onChange={handleChange} />
      </label>
      <label>
        STDs: HIV:
        <input type="number" name="stdsHIV" onChange={handleChange} />
      </label>
      <label>
        STDs: Hepatitis B:
        <input type="number" name="stdsHepatitisB" onChange={handleChange} />
      </label>
      <label>
        STDs: HPV:
        <input type="number" name="stdsHPV" onChange={handleChange} />
      </label>
      <label>
        STDs: Time since first diagnosis:
        <input type="number" name="stdsTimeSinceFirstDiagnosis" onChange={handleChange} />
      </label>
      <label>
        STDs: Time since last diagnosis:
        <input type="number" name="stdsTimeSinceLastDiagnosis" onChange={handleChange} />
      </label>
      <label>
        Dx: Cancer:
        <input type="number" name="dxCancer" onChange={handleChange} />
      </label>
      <label>
        Dx: CIN:
        <input type="number" name="dxCIN" onChange={handleChange} />
      </label>
      <label>
        Dx: HPV:
        <input type="number" name="dxHPV" onChange={handleChange} />
      </label>
      <label>
        Dx:
        <input type="number" name="dx" onChange={handleChange} />
      </label>
      <label>
        Hinselmann:
        <input type="number" name="hinselmann" onChange={handleChange} />
      </label>
      <label>
        Citology:
        <input type="number" name="citology" onChange={handleChange} />
      </label>
      <label>
        Schiller:
        <input type="number" name="schiller" onChange={handleChange} />
      </label>
      <button type="submit">Predict</button>
    </form>
 );
};

export default CervicalCancerForm;
