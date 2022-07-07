import React from 'react'
import axios from 'axios';
import logo from './logo.png';
import { VideComponent } from './VideComponent';
import { Error, Success } from './Messages/messages';


function InterviewQuestion7() {
  const videoFunction = async (blob) => {
    console.log(blob)
    let data = new FormData();
    data.append('question', 'question 1');
    data.append('file', blob);
    data.append('questionTitle', 'What motivates you when you work?');
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
      <div class="header">
        <di class="logo">
          <img src={logo} alt="Logo" />

        </di>
      </div>

      <div class="contentbody">
        <div class="left" style={{ width: "70%" }}>
        </div>
        <div class="right" style={{ margin: "-80px 10%" }}>
          <p style={{ color: "#ea5e11" }}>QUESTION 7</p><br />
          <p>What motivates you when you work?</p>
          <VideComponent videoFunction={videoFunction} />
        </div>
      </div>


      <footer>
        <div>
          WEB: <a href="#">www.REALVOICE.com</a>
        </div>
        <div>
          HELP DESK: <a href="tel:+">901-609-300</a>
        </div>
        <div>
          EMAIL: <a href="mailto:hr@realvoice.com">HR@REALVOICE.com</a>
        </div>
      </footer>
    </div>
  )
}

export default InterviewQuestion7;