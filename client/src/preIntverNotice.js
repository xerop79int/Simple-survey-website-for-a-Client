import logo from './logo.png';
import download from './download.png'
import './App.css';

function PreIntverNotice() {
  return (
    <div>
        <div class="header">
            <di class="logo">
                <img src={logo} alt="Logo" />
        
            </di>
        </div>
    
        <div class="contentbody">
            <div class="left" style={{display: "block", margin: "auto", width: "100%"}}>
                <p style={{textAlign: "center"}}>Download Interview Questions</p>
                <a href="#">
                    <img src={download} alt="" style={{display: "block", margin: "auto"}} />
                </a> 
            </div>
            <div class="right">
                <p>Your Interview is about to start! The browser will prompt you to record using your computer's camera and microphone. Please make sure you're all set in quite space.</p><br/>
                <p style={{backgroundColor: "#ea5e11", padding: "10px 7px", marginBottom: "20px"}}><span style={{color: "#fff"}}>Important: </span> Once you submit each section, you will be unable to return and edit your response in that section.</p>
                <a className='button' href='interview' style={{marginTop: "20px"}}> Let's GO</a>
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
  );
}

export default PreIntverNotice;