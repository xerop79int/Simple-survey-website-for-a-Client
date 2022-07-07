import React from 'react'
import logo from './logo.png';
import { VideComponent } from './VideComponent';
import axios from 'axios';
import { Error, Success } from './Messages/messages';

function InterviewQuestion1() {

  const videoFunction = async (blob) => {
    let data = new FormData();
    data.append('question', 'question 1');
    data.append('questionTitle', 'What hourly pay range are you expecting or looking for?');
    data.append('file', blob);
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
          <p style={{ color: "#ea5e11" }}>QUESTION 1</p><br />
          <p>What hourly pay range are you expecting or looking for?</p>
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

export default InterviewQuestion1;