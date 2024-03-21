import React, { useContext } from 'react'
import './Main.css';

import { assets } from '../../assets/assets';
import { Context } from "../../context/Context";




const Main = () => {
   const {
     onSent,
     setRecentPropmt,
     recentPromt,
     showResult,
     loading,
     resultData,
     input,
     setInput,
   } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest some songs for my travell playlist</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest some React Workouts</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>What are the features of new React19 ?</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Who is Ajay the dev ?</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="Enter a promt here !" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Ajay Gemini may display inaccurate info,including about people ,so
            doublecheck its responses.You privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main