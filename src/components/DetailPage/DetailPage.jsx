import React from "react";
//import { Copy } from "./Copy";
//import { FullscreenWrapper } from "./FullscreenWrapper";
import "./style.css";
import {useParams} from "react-router-dom"
import Chatbot from "../chatbot";


export const CodeLab = () => {
  //courseId/:userHandle/:title
  const {courseId,userHandle,title,sessionId}=useParams()
  return (
    <div className="code-lab">
      <div className="div">
        <p className="building">{title}</p>
        <div className="text-wrapper">Code Labs</div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="text-wrapper-2">Steps</div>
          <div className="text-wrapper-3">Settings</div>
          <div className="text-wrapper-4">Code</div>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <p className="the-start-state-of">
            The start state of each module is located in the numbered directory. To work on these demos:
            <br />
            <br />
            Open the root directory of the demo in the terminal. This is usually where the package.json file is. e.g. 05
            <br />
            <br />
            In this directory run npm start (Node.js, npm and all dependencies are already installed.)
            <br />
            <br />
            To run the module solution follow the steps above in the appropriate directory e.g. solutions/05.
          </p>
        </div>
        <div className="text-wrapper-5">PS Tutor</div>

        <div className="text-wrapper-11">AI-Powered learning mentor</div>
        {/* <img className="chatbot" alt="Chatbot" src="chatbot.svg" /> */}
        <svg className="chatbot" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="logo mark">
          <rect id="Rectangle 1786" x="4.5246" y="3.14752" width="16.7213" height="17.9016" fill="white"/>
          <g id="Group">
          <path id="Vector" d="M0 3.61309V20.3869C0 22.3811 1.61891 24 3.61309 24H20.3869C22.3811 24 24 22.3811 24 20.3869V3.61309C24 1.61891 22.3811 0 20.3869 0H3.61309C1.61891 0 0 1.61891 0 3.61309ZM6.77672 9.7309L11.3149 12.3491L6.77672 14.9673V9.72654V9.7309ZM6.77672 19.4051V16.8611L14.5964 12.3447L6.77672 7.83709V5.29309L18.9993 12.3491L6.77672 19.4051Z" fill="url(#paint0_linear_837_1268)"/>
          </g>
          </g>
          <defs>
          <linearGradient id="paint0_linear_837_1268" x1="11.9617" y1="0" x2="11.9617" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF1675"/>
          <stop offset="1" stop-color="#770EF7"/>
          </linearGradient>
          </defs>
        </svg>

        <Chatbot props={{courseId,userHandle,title,sessionId}}/>
      </div>
    </div>
  );
};
