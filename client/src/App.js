
import logo from './logo.png';
import carrerStart from './a new career.png';
import './App.css';

import { Link } from 'react-router';
import { isAuthenticated } from './Auth/auth';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="activities">
          {
            isAuthenticated().role == 1 &&
            <a href="dashboard">Admin</a>
          }
        </div>
      </div>
      
      <div className='containercontentbody'>
      <div className="contentbody">
        <div className="left">
          <img src={carrerStart} alt="" />
        </div>
        <div className="right">
          <h2>Thank you for taking the time to interview with our company today.</h2> <br />
          <p>You will be completing a one-way video interview with 12 questions. For each question you will record a video response
            using your welacam. You will have the opportunity for retakes.</p><br />
          <p>1. Fill in some basic information about yourself</p>
          <p>2. Sat up your camera</p>
          <p>3. Answer 12 video questions</p><br />
          <a className='button' href="candidateform" >Continue</a>
        </div>
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
    </div >
  );
}

export default App;
