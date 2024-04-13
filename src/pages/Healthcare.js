import "./Healthcare.css";
import { useNavigate } from 'react-router-dom';

const Healthcare = () => {
  const navigate = useNavigate();

  const handleButtonClick1 = (event) => {
    event.preventDefault();
    navigate('/breastCancer');
  };
  
  const handleButtonClick2 = (event) => {
    event.preventDefault();
    navigate('/cervicalCancer');
  };
  
  const handleButtonClick3 = (event) => {
    event.preventDefault();
    navigate('/pcos');
  };
  

  return (
    <>
    <section className="desktop-1" id="mainpage">
      <div className="early-diagnosis-is-key-to-empo-parent" id="PCOS">
        <p className="early-diagnosis-is" id="PCOS_para">
          early diagnosis is key to empower you
        </p>
        <h4 className="pcos" id="PCOS_Main">
          <p className="cervical">PCOS</p>
        </h4>
        <img
          className="frame-child"
          id="PCOS_img"
          alt=""
          src="/ellipse-4.svg"
        />
      </div>

      <button className="tap-button" id="PCOS_tap" onClick={handleButtonClick3}>
        <div className="tap-button-child" />
        <img className="arcticonstap-tap" alt="" src="/arcticonstaptap.svg" />
      </button>
      <div
        className="save-life-by-detecting-cervica-parent"
        id="Cervical_Cancer"
      >
        <p className="save-life-by" id="cc_text">
          Save life by detecting cervical cancer early
        </p>
        <h4 className="cervical-cancer" id="cc_main">
          <p className="cervical">CERVICAL</p>
          <p className="cervical">CANCER</p>
        </h4>
        <img className="frame-item" id="cc_img" alt="" src="/ellipse-3.svg" />
      </div>
      <button className="tap-button1" id="cc_tap" onClick={handleButtonClick2}>
        <div className="tap-button-child" />
        <img className="arcticonstap-tap" alt="" src="/arcticonstaptap.svg" />
      </button>

      <div className="knowing-your-breasts-could-sav-parent" id="Breast_Cancer">
        <p className="knowing-your-breasts" id="BC_para">
          Knowing Your Breasts Could Save Your Life
        </p>
        <h4 className="breast-cancer" id="BC">
          <p className="cervical">BREAST</p>
          <p className="cervical">CANCER</p>
        </h4>
        <img className="frame-inner" id="BC_img" alt="" src="/ellipse-2.svg" />
      </div>
      
      <button className="tap-button2" id="bc_tap" onClick={handleButtonClick1}>
      <div className="tap-button-child" />
        <img className="arcticonstap-tap" alt="" src="/arcticonstaptap.svg" />
      </button>
      <h3 className="ai-detection">AI DETECTION</h3>
    </section>
    
    <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Breast Cancer
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      <h2>Understanding Breast Cancer: What You Need to Know</h2>

<p>Breast cancer is one of the most prevalent forms of cancer affecting women worldwide. It occurs when abnormal cells in the breast tissue grow out of control. While it predominantly affects women, men can also develop breast cancer, albeit at a much lower rate.</p>

<h3>Risk Factors:</h3>

<ul>
  <li><strong>Gender:</strong> Being a woman puts you at a higher risk of developing breast cancer.</li>
  <li><strong>Age:</strong> The risk increases with age, with the majority of cases diagnosed in women over 50.</li>
  <li><strong>Family History:</strong> Having a close family member (parent, sibling, or child) with breast cancer increases your risk.</li>
  <li><strong>Genetics:</strong> Inherited gene mutations such as BRCA1 and BRCA2 significantly increase the risk of breast cancer.</li>
  <li><strong>Personal History:</strong> Previous breast cancer diagnosis or certain benign breast conditions can increase the risk.</li>
  <li><strong>Lifestyle Factors:</strong> Obesity, excessive alcohol consumption, lack of physical activity, and hormone replacement therapy after menopause can elevate the risk.</li>
</ul>

<h3>Signs and Symptoms:</h3>

<ul>
  <li><strong>Lump or Mass:</strong> A painless lump or thickening in the breast or underarm area.</li>
  <li><strong>Changes in Breast Size or Shape:</strong> Swelling, shrinkage, or distortion of the breast.</li>
  <li><strong>Skin Changes:</strong> Dimpling, puckering, redness, or scaling of the breast skin.</li>
  <li><strong>Nipple Changes:</strong> Inversion, discharge (other than breast milk), or unusual nipple appearance.</li>
  <li><strong>Breast Pain:</strong> Although not a common symptom of breast cancer, persistent breast pain should be evaluated.</li>
</ul>

<h3>Screening and Diagnosis:</h3>

<ul>
  <li><strong>Mammography:</strong> Regular mammograms are the most effective screening tool for detecting breast cancer early, often before symptoms appear.</li>
  <li><strong>Clinical Breast Exam:</strong> A physical examination by a healthcare provider to check for any abnormalities in the breasts.</li>
  <li><strong>Biopsy:</strong> If suspicious changes are found, a biopsy may be performed to remove a sample of breast tissue for laboratory analysis.</li>
</ul>

<h3>Prevention:</h3>

<ul>
  <li><strong>Healthy Lifestyle:</strong> Maintain a healthy weight, engage in regular physical activity, limit alcohol consumption, and avoid smoking.</li>
  <li><strong>Breastfeeding:</strong> Breastfeeding may reduce the risk of breast cancer.</li>
  <li><strong>Regular Screening:</strong> Follow recommended guidelines for mammograms and clinical breast exams based on your age and risk factors.</li>
</ul>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Cervical Cancer
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        PCOS
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Healthcare;