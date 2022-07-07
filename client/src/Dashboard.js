import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from './logo.png';

function Dashboard() {
    const [data, setData] = useState([]);

    const getData = async () => {
        axios.get('/api/users/get').then(res => {
            if (res.status === 200) {
                setData(res.data);
            }
            else {
                console.log(res.data.errorMessage);
            }
        })
    };

    useEffect(() => {
        getData();

        return () => {

        }
    }, [])

    return (
        <div>
            <div className="header">
                <di className="logo">
                    <img src={logo} alt="Logo" />

                </di>
                <div className="activities">
                    <a href="dashboard">Admin</a>
                </div>
            </div>

            <div className="contentbody">
                <div className="left" style={{ width: "150px", margin: "0" }}>
                    <ul>
                        <li><a href="dashboard">DASHBOARD</a></li>
                        <li><a href="applicants">APPLICANTS</a></li>
                        <li><a href="settings">SETTINGS</a></li>
                    </ul>
                </div>
                <div class="right dashboard">
                    <h2>WELCOME ADMINSTRATOR</h2>
                    <h4>DASHBOARD</h4>
                    <div class="summary">
                        <div class="applicants">
                            <p>NEW APPLICANT SUBMISSIONS</p>
                            <div><p>{data.slice(0, 3).length}</p></div>
                        </div>
                        <div class="applicants">
                            <p>TOTAL SUBMISSIONS</p>
                            <div>
                                <p>{data.length}</p>
                            </div>
                        </div>
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

export default Dashboard