import './App.css';
import Thankyou from './Thank you.png';
import logo from './logo.png';
import { isAuthenticated } from './Auth/auth';

function InterviewCoomplete() {
    return (
        <div>
            <div class="header">
                <di class="logo">
                    <img src={logo} alt="Logo" />

                </di>
                {
                    isAuthenticated()?.role == 1 &&
                    <div class="activities">
                        <a href="dashboard">Admin</a>
                    </div>
                }
            </div>

            <div class="contentbody">
                <div class="left">
                    <img src={Thankyou} alt="" />
                </div>
                <div class="right">
                    <h2 style={{ textAlign: "center" }}>INTERVIEW COMPLETE!</h2> <br />
                    <p>You have successfully completed you interview. We thank you for taking the time to interview with us. Someone will be in touch with you shortly.</p><br />

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

export default InterviewCoomplete