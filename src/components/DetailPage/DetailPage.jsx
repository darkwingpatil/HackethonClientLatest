import React from "react";
//import { Copy } from "./Copy";
//import { FullscreenWrapper } from "./FullscreenWrapper";
import "./style.css";
import { useParams } from "react-router-dom"
import Chatbot from "../chatbot";
import image from "./orb-light-fsharp-level.gif"
import image2 from "./1_mB6YLIGqIk1hTzU6Fb12zQ.gif"
import clickhere from "./animated-click-here-sign-and-button-image-0019.gif"


import { v4 as uuidv4 } from "uuid";

export const CodeLab = () => {
  //courseId/:userHandle/:title

  const sessionId = uuidv4()

  return (
    <div className="code-lab">
      <div>

      </div>
      <div className="div">
        <p className="building">Unravel the mysteries of plan management</p>
        <div className="overlap">
          <div className="rectangle" />
          <div className="rectangle-2" >
            <img style={{"height": "100%", "width": "100%"}} src={image2}/>
          </div>
          <div className="rectangle-4" />
          <p className="the-start-state-of">
            <b>What is Plan Management: </b>Plan management deals with the organization and management of users for B2B customers..
            <br />
            <br />
            <br />
            <br />
            <b>Github link: </b> <a href='https://github.com/ps-dev/plan-management' className="newLiksmatter">plan-management</a>
            <br />
            <br />
            <br />
            <br />
            <b>Confluence Link:</b> <a className="newLiksmatter" href='https://pluralsight.atlassian.net/wiki/spaces/PE/pages/2004648065/Plan+Management+Dark+Matter'>Docs</a>
            <br />
            <br />
            <br />
            <br />
            <b>Slack support:</b> <a className="newLiksmatter" href="https://app.slack.com/client/T02A50N5X/C8ZCWDZ5H">#dev-plan-management</a>
            <br />
            <br />
            <br />
            <br />
            <b>Cool Things About F#:</b> F# excels in data science, asynchronous programming, and domain-specific languages, making it a versatile language for various applications.
            <br />
            <br />
             <b>Scott Wlaschin, author of "F# for Fun and Profit":</b>

            "F# is like turning on the firehose of .NET development. It gives you all the productivity and convenience of C# and Visual Studio, but with more safety and expressiveness. It lets you do more with less code and less effort." 

            <br />
            <br />
            <br />
            <a style={{"fontSize":"20px","color":"white"}}href="https://learn.microsoft.com/en-us/dotnet/fsharp/">F# documentation</a>
            <img src={clickhere}/>
          </p>
        </div>
        <div className="text-wrapper-5">APP_Dark_Matter_Buddy</div>

        <div className="text-wrapper-11">AI-Powered Buddy</div>
        {/* <img className="chatbot" alt="Chatbot" src="chatbot.svg" /> */}
        <svg className="chatbot" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="logo mark">
            <rect id="Rectangle 1786" x="4.5246" y="3.14752" width="16.7213" height="17.9016" fill="white" />
            <g id="Group">
              <path id="Vector" d="M0 3.61309V20.3869C0 22.3811 1.61891 24 3.61309 24H20.3869C22.3811 24 24 22.3811 24 20.3869V3.61309C24 1.61891 22.3811 0 20.3869 0H3.61309C1.61891 0 0 1.61891 0 3.61309ZM6.77672 9.7309L11.3149 12.3491L6.77672 14.9673V9.72654V9.7309ZM6.77672 19.4051V16.8611L14.5964 12.3447L6.77672 7.83709V5.29309L18.9993 12.3491L6.77672 19.4051Z" fill="url(#paint0_linear_837_1268)" />
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_837_1268" x1="11.9617" y1="0" x2="11.9617" y2="24" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF1675" />
              <stop offset="1" stop-color="#770EF7" />
            </linearGradient>
          </defs>
        </svg>

        <Chatbot props={{ sessionId }} />
      </div>
    </div>
  );
};
