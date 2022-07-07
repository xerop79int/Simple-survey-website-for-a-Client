import React from 'react'
import logo from './logo.png';
import { VideComponent } from './VideComponent';
import axios from 'axios';
import { Error, Success } from './Messages/messages';


function InterviewQuestion5() {
  const videoFunction = async (blob) => {
    console.log(blob)
    let data = new FormData();
    data.append('question', 'question 1');
    data.append('file', blob);
    data.append('questionTitle', 'How would you rate your technical knowledge from 1 to 5 – 5 being the highest and give an example of how you embrace technology?');
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
          <p style={{ color: "#ea5e11" }}>QUESTION 5</p><br />
          <p>How would you rate your technical knowledge from 1 to 5 – 5 being the highest and give an example of how you embrace technology?</p>
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

export default InterviewQuestion5;