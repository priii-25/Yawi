import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Learn = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const navigate = useNavigate();

  const onHomeGroupClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  return (
    <div className="relative bg-lightsteelblue w-full h-[1040px] overflow-hidden text-left text-3xs text-white font-heading-bold-6">
      <h1 className="m-0 absolute top-[calc(45%_-_412px)] left-[19.58%] text-21xl leading-[40px] font-semibold font-inherit text-sienna">
        Discover
      </h1>

      <Link
        className="[text-decoration:none] absolute w-[50.35%] top-[176px] right-[30.07%] left-[19.58%] h-[366px] text-[15px] text-[inherit]"
        to="http://localhost:8080/api/videos/GoodTouchBadTouch"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-darkcyan h-[366px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[366px] object-cover"
          alt=""
          src="/rectangleimagegroup@2x.png"
        />
        <div className="absolute w-[22.76%] top-[calc(50%_+_31px)] right-[72.41%] left-[4.83%] h-[60px]">
          <div className="absolute w-[60.61%] top-[calc(50%_-_8px)] right-[0%] left-[39.39%] h-[15px]">
            <div className="absolute w-full top-[calc(50%_-_7.5px)] right-[0%] left-[0%] h-[15px]">
              <div className="absolute top-[calc(50%_-_7.5px)] left-[0%] tracking-[0.5px] leading-[15px] font-medium mix-blend-normal">
                Nandini Srivastava
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[60px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[60px] h-[60px] opacity-[0.5] border-[1px] border-solid border-white" />
            <div className="absolute top-[5px] left-[5px] w-[50px] h-[50px]">
             
            </div>
          </div>
        </div>
        <h1 className="m-0 absolute top-[40px] left-[5.52%] text-11xl tracking-[0.3px] leading-[36px] font-semibold font-inherit">
        Good Touch & Bad Touch
        </h1>
        <div className="absolute top-[326px] left-[659px] w-[46px] h-5 text-3xs">
        </div>
      </Link>


      <Link
        className="[text-decoration:none] absolute w-[24.44%] top-[176px] right-[4.17%] left-[71.39%] h-[366px] text-11xl text-[inherit]"
        to="http://localhost:8080/api/videos/Women Hygiene"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-500 h-[366px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[366px] object-cover"
          alt=""
          src="/skateboarding@2x.png"
        />
        <div className="absolute w-[65.34%] top-[calc(50%_-_143px)] left-[11.36%] tracking-[0.3px] leading-[36px] font-semibold inline-block">
          Women's hygience
        </div>
        <div className="absolute w-[14.49%] top-[326px] right-[5.68%] left-[79.83%] h-5 text-3xs">
         
        </div>
      </Link>


      <Link
        className="[text-decoration:none] absolute w-[17.99%] top-[659px] right-[62.43%] left-[19.58%] h-[313px] text-[inherit]"
        to="http://localhost:8080/api/videos/Women Hygiene"
       >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-400 h-[313px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-40 object-cover"
          alt=""
          src="/group-37011@2x.png"
        />
        <div className="absolute w-[17.76%] top-[10px] right-[3.86%] left-[78.38%] h-5">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-6xs max-w-full overflow-hidden h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
        </div>
        <div className="absolute w-[81.47%] top-[calc(50%_+_27.5px)] right-[10.81%] left-[7.72%] h-[51px] text-smi text-lightsteelblue-200">
          <div className="absolute w-full top-[calc(50%_-_25.5px)] right-[0%] left-[0%] h-[51px]">
            <div className="absolute w-[49.76%] top-[calc(50%_-_25.5px)] right-[50.24%] left-[0%] h-[13px]">
              <div className="absolute top-[calc(50%_-_6.5px)] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
              Nandini Srivastava
              </div>
              <div className="absolute w-[6.67%] top-[3px] right-[0%] left-[93.33%] rounded-[50%] bg-mediumseagreen h-[7px]" />
            </div>
            <div className="absolute w-full top-[calc(50%_-_0.5px)] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
            Women's hygience
            </div>
          </div>
        </div>
        
      </Link>


      <Link
        className="[text-decoration:none] absolute w-[17.99%] top-[659px] right-[23.54%] left-[58.47%] h-[313px] text-[inherit]"
        to="http://localhost:8080/api/videos/GoodTouchBadTouch"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-400 h-[313px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-40 object-cover"
          alt=""
          src="/group-370@2x.png"
        />
        <div className="absolute w-[17.76%] top-[10px] right-[3.86%] left-[78.38%] h-5">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-6xs max-w-full overflow-hidden h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
        </div>
        <div className="absolute w-[81.47%] top-[calc(50%_+_27.5px)] right-[10.81%] left-[7.72%] h-[77px] text-smi text-lightsteelblue-200">
          <div className="absolute w-full top-[calc(50%_-_38.5px)] right-[0%] left-[0%] h-[77px]">
            <div className="absolute w-[49.29%] top-[calc(50%_-_38.5px)] right-[50.71%] left-[0%] h-[13px]">
              <div className="absolute top-[calc(50%_-_6.5px)] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
              Nandini Srivastava
              </div>
              <div className="absolute w-[6.73%] top-[3px] right-[0%] left-[93.27%] rounded-[50%] bg-coral h-[7px]" />
            </div>
            <div className="absolute w-full top-[calc(50%_-_13.5px)] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
              Good Touch & Bad Touch
            </div>
          </div>
        </div>
       
      </Link>


      <Link
        className="[text-decoration:none] absolute h-[calc(100%_-_727px)] w-[17.99%] top-[659px] right-[4.17%] bottom-[68px] left-[77.85%] text-[inherit]"
        to="http://localhost:8080/api/videos/Priyanshi's edu vid"
      >
        <div className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%] rounded-xl bg-gray-400" />
        <img
          className="absolute h-[calc(100%_-_153px)] w-full top-[0px] right-[0%] bottom-[153px] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-37011@2x.png"
        />
        <div className="absolute h-[calc(100%_-_293px)] w-[17.76%] top-[10px] right-[3.86%] bottom-[283px] left-[78.38%]">
          <img
            className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%] rounded-6xs max-w-full overflow-hidden max-h-full opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
        </div>
        <div className="absolute h-[calc(100%_-_236px)] w-[81.47%] top-[184px] right-[10.81%] bottom-[52px] left-[7.72%] text-smi text-lightsteelblue-200">
          <div className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%]">
            <div className="absolute h-[calc(100%_-_64px)] w-[50.71%] top-[0px] right-[49.29%] bottom-[64px] left-[0%]">
              <div className="absolute top-[0px] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
                Priyanshi Rai
              </div>
              <div className="absolute h-[calc(100%_-_6px)] w-[6.54%] top-[3px] right-[0%] bottom-[3px] left-[93.46%] rounded-[50%] bg-mediumseagreen" />
            </div>
            <div className="absolute w-full top-[25px] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
              Planning, Organization, and Time Management
            </div>
          </div>
        </div>
      
      </Link>


      <Link
        className="[text-decoration:none] absolute w-[17.99%] top-[659px] right-[42.99%] left-[39.03%] h-[313px] text-[inherit]"
        to="http://localhost:8080/api/videos/Periods"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-400 h-[313px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-40 object-cover"
          alt=""
          src="/group-371@2x.png"
        />
        <div className="absolute w-[17.76%] top-[10px] right-[3.86%] left-[78.38%] h-5">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-6xs max-w-full overflow-hidden h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
        </div>
        <div className="absolute w-[81.47%] top-[calc(50%_+_27.5px)] right-[10.81%] left-[7.72%] h-[51px] text-smi text-lightsteelblue-200">
          <div className="absolute w-full top-[calc(50%_-_25.5px)] right-[0%] left-[0%] h-[51px]">
            <div className="absolute w-[44.08%] top-[calc(50%_-_25.5px)] right-[55.92%] left-[0%] h-[13px]">
              <div className="absolute top-[calc(50%_-_6.5px)] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
              Nandini Srivastava
              </div>
              <div className="absolute w-[7.53%] top-[3px] right-[0%] left-[92.47%] rounded-[50%] bg-coral h-[7px]" />
            </div>
            <div className="absolute w-full top-[calc(50%_-_0.5px)] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
              Your First Period
            </div>
          </div>
        </div>

      </Link>


      <h2 className="m-0 absolute top-[calc(50%_+_83px)] left-[19.58%] text-[28px] leading-[28px] font-medium font-inherit text-sienna">
        Watch More
      </h2>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[calc(50%_-_482px)] left-[6.22%] text-xl leading-[20px] font-semibold text-sienna"
        to="/"
        style={{
          textAlign:'center',
       }}
      >
       YAWI
      </Link>
      <img
 src="YAWI.png" 
 style={{
    width: '250px',
    height: 'auto', 
    position: 'absolute',
    top: '3rem',
 }}
/>
    </div>
  );
};

export default Learn;
