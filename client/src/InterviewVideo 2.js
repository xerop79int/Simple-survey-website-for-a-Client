import React from 'react'
import logo from './logo.png';
import { VideComponent } from './VideComponent';
import axios from 'axios';
import { Error, Success } from './Messages/messages';

function InterviewQuestion2() {
  const videoFunction = async (blob) => {
    console.log(blob)
    let data = new FormData();
    data.append('question', 'question 1');
    data.append('file', blob);
    data.append('questionTitle', 'How many hours are you looking for – part time or full time?');
    data.append('user', localStorage.getItem('userId'));
    axios.post('/api/users/interviews/post', data).then(res => {
      if (res.status === 200) {
        Success(res.data.successMessage);
      }
      else {
        Error(res.data.errorMessage);
      }
    })
  };

  return (
    <div>
      <div className="header">
        <di className="logo">
          <img src={logo} alt="Logo" />

        </di>
      </div>

      <div className="contentbody">
        <div className="left" style={{ width: "70%" }}>
        </div>
        <div className="right" style={{ margin: "-80px 10%" }}>
          <p style={{ color: "#ea5e11" }}>QUESTION 2</p><br />
          <p>How many hours are you looking for – part time or full time?</p>
          <VideComponent videoFunction={videoFunction} />
        </div>
      </div>     
    </div>
  )
}

export default InterviewQuestion2;