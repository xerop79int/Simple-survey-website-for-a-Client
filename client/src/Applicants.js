import logo from './logo.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Rating } from './Rate';
import { DeleteOutlined } from '@ant-design/icons';


function Applicants() {
    const [data, setData] = useState([]);

    const getData = async () => {
        axios.get('/api/users/interviews/get').then(res => {
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
    }, []);

    const deleteUser = async (id) => {
        axios.delete(`/api/users/delete/${id}`).then(res => {
            if (res.status === 200) {
                getData();
                console.log(res.data);
            }
            else {
                console.log(res.data.errorMessage);
            }
        })
    };

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
                <div className="right dashboard">
                    <h2>WELCOME ADMINSTRATOR</h2>
                    <h4>APPLICANT TRACKING</h4>
                    <div className="summary" style={{ flexDirection: "column", textAlign: "left", marginTop: "30px" }}>
                        {
                            data?.length > 0 && data.map(d => {
                                return (
                                    <div style={{ marginBottom: '32px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div><strong>APPLICANT NAME: {d.firstName} {d.lastName}</strong></div>
                                            <div><DeleteOutlined onClick={() => deleteUser(d._id)} /></div>
                                        </div>
                                        <Rating getComment={d?.comment} getRating={d?.rating} userId={d._id} />
                                        {
                                            d?.interviews?.length > 0 && d.interviews.map(interview => {
                                                return (
                                                    <>
                                                        <p style={{ marginTop: '23px' }}>{interview?.questionTitle}</p>
                                                        <div className="video">
                                                            <video src={interview?.answer?.url} alt="Video" controls style={{ width: "180px" }} />
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        <hr style={{ margin: '19px 0px' }} />
                                    </div>
                                )
                            })
                        }
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

export default Applicants