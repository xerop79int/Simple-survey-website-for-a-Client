import logo from './logo.png';

function Settings () {
  return (
    <div>
        <div className="header">
        <di className="logo">
            <img src={logo} alt="Logo"/>

        </di>
        <div className="activities">
            <a href="dashboard">Admin</a>
        </div>
        </div>

    <div className="contentbody">
        <div className="left" style={{width: "150px", margin: "0"}}>
            <ul>
                <li><a href="dashboard">DASHBOARD</a></li>
                <li><a href="applicants">APPLICANTS</a></li>
                <li><a href="settings">SETTINGS</a></li>
            </ul>
        </div>
        <div className="right dashboard">
            <h2>WELCOME ADMINSTRATOR</h2>
            <h4>SETTINGS</h4>
            <div className="summary" style={{flexDirection: "column", textAlign: "left", marginTop: "30px"}}>
                <p>ADD NEW ADMIN USERS</p>
                <p>ADD/REMOVE INTERVIEW QUESTIONS</p>
                <p>BLUK DELETE APPLICATIONS</p>
                <p>EMAIL NOTIFICATIONS</p>
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
    </div>
  )
}

export default Settings