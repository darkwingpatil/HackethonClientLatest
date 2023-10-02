import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { io } from "socket.io-client";

import { ProfileSkeleton } from "./ProfileSkeleton";
import logo from "./chatlogo.png";
import search_active from "./search_active.png";
import search from "./submit.svg";
import labBackground from "./labBackground.png";
import thumpsup from "./icons8-thumbs-up.png"
import thumpsupclicked from "./icons8-thumbs-up-clicked.png"
import thumpsdown from "./icons8-thumbs-down.png"
import thumpsdownclicked from "./icons8-thumbs-down-clicked.png"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ChatHistroyAtom, CurrentSessionAtom } from "../atoms/ListAtoms"
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "./icons8-copy.png"
import { v4 as uuidv4 } from "uuid";
import "./chatbot.css";
import "../App.css";
import _ from "lodash";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// Import the necessary language syntax
import {
  jsx,
  python,
  java,
} from "react-syntax-highlighter/dist/esm/languages/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("java", java);

// note this is for local test purpose
//const userHandle = "a48c4f3a-9a5e-4709-a438-4430f8c98e24"
//const courseId = "133ddf17-a77d-4118-b79e-e8bb6ed1d674"




function Chatbot({ props }) {

  // console.log(props, "in chatbottttt")
  let { sessionId } = props
  const [isOpen, setIsOpen] = useState(true);
  const [isFetchingResponse, setIsFetchingResponse] = React.useState(false);
  const [inputValue, setInputValue] = useState("");
  const [copyState, setcopyState] = useState(false);


  // recoil stateManagement controllers
  const setchatHistoryAtom = useSetRecoilState(ChatHistroyAtom);
  const getChatHistoryAtom = useRecoilValue(ChatHistroyAtom);
  // const setSeesionAtom = useSetRecoilState(CurrentSessionAtom);
  // const getSessionAtom = useRecoilValue(CurrentSessionAtom);

  const freqAskQuestions = [
    "Hey there, it’s great to see you! 👋",
    `Ask me anything related to F#`,
  ];
  //note this api should be hit when from listingpage we are entering into detail page
  // POST localhost:4000/settingContextPromptData
  //With body which would be dynamic {"courseId":"133ddf17-a77d-4118-b79e-e8bb6ed1d674","userHandle":"a48c4f3a-9a5e-4709-a438-4430f8c98e24"}



  const fetchMoreData = () => { };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };
  // console.log(sessionId, "SessnionId")


  const handleSubmit = () => {

    setIsFetchingResponse(true);
    fetch('https://darkmatterconfluencebot.onrender.com/getResponse', {
      'method': "POST",
      'headers': {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      'body': JSON.stringify({ question: inputValue, sessionId })


    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "llssswingRR")
        // console.log(data.data.output_text)
        // console.log(data.sessionId)
        // console.log(sessionId)
        setchatHistoryAtom([...getChatHistoryAtom, { question: inputValue, answer: data.data.output_text }])
        // setSeesionAtom(data.sessionId)
        setIsFetchingResponse(false)
      })
      .catch((err) => {
        // console.log("got error" + err)
        //setIsFetchingResponse(false)
      })

    // console.log(getChatHistoryAtom, "atom state value")

    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };


  const TextWithCodeBlocks = ({ text }) => {
    // console.log(text, "Ssasa")
    const codeRegex = /```([\s\S]*?)```/g;
    const codeBlocks = text.split(codeRegex);

    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        {codeBlocks.map((block, index) => {
          if (index % 2 === 0) {
            return <p key={index}>{block}</p>;
          } else {
            return (
              <SyntaxHighlighter
                language="auto"
                style={vscDarkPlus}
                className="code-textor"
              >
                {block}
              </SyntaxHighlighter>
            );
          }
        })}
      </div>
    );
  };



  return (
    <div className="App">
      {/* <img src={labBackground} alt="Lab Background" /> */}
      <div id="chatbot-container">
        <div id="chatbot-icon" onClick={toggleChatbox}>
          <img src={logo} alt="Chatbot Icon" />
        </div>
      </div>
      {isOpen && (
        <div className="chatbox">

          <div
            id="scrollableDiv"
            style={{
              maxHeight: "70vh",
              minHeight: "60vh",
              overflow: "auto",
            }}
          >
            {/*Put the scroll bar always on the bottom*/}
            <InfiniteScroll
              dataLength={getChatHistoryAtom.length} //This is important field to render the next data
              next={fetchMoreData}
              hasMore={true}
              loader={<h4 style={{ display: "none" }}>''</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              // below props only if you need pull down functionality
              refreshFunction={() => {
                console.log("refreshed");
              }}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: "center" }}>
                  &#8595; Pull down to refresh
                </h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: "center" }}>
                  &#8593; Release to refresh
                </h3>
              }
            >
              {

                //getSessionAtom != null && getSessionAtom == sessionId && 
                getChatHistoryAtom.length && getChatHistoryAtom.length > 0
                  ? getChatHistoryAtom.map((chat, index) => (
                    <div key={index} className="chatbox-content">
                      {
                        <>
                          {chat.question && (
                            <div className="message-orange">
                              <p className="message-content">{chat.question}</p>
                            </div>
                          )}
                          {chat.answer && (
                            <>
                              <div className="message-blue">
                                <p className="message-content">
                                  <TextWithCodeBlocks text={chat.answer} />
                                </p>
                              </div>
                              <CopyToClipboard
                                text={chat.answer}
                                onCopy={() => setcopyState(true)}>
                                {/* single child to which event is applied*/}

                                <span className="icon-looks">
                                <img src={copy} alt="lab copy" />
                                </span>
                              </CopyToClipboard>
   
                            </>
                          )}
                        </>
                      }
                    </div>
                  ))
                  : freqAskQuestions.map((question) => (
                    <div className="chatbox-faqQuestion">{question}</div>
                  ))}

              {isFetchingResponse && <ProfileSkeleton />}
            </InfiniteScroll>
          </div>
          <div style={{ padding: "10px" }}>

            <input id="askHere" placeholder="Ask your question here" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleKeyDown} disabled={isFetchingResponse} />
            {!isFetchingResponse && (
              <div className="icon" onClick={handleSubmit}>
                <img
                  src={inputValue.length > 0 ? search_active : search}
                  alt="Search Icon"
                />
              </div>
            )}
          </div>
        </div>
      )}
      {/* <header className="App-header">
        <Chatbot />
      </header> */}
    </div>
  );
}

export default Chatbot;
