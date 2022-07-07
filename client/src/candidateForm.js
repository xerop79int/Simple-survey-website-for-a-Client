import React, { useState } from 'react'
import './App.css';
import logo from './logo.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function CandidateForm(props) {
  const history = useHistory();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    street: '',
    postalCode: ''
  });


  const { firstName, lastName, phone, email, city, street, postalCode } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/users/create', { firstName, lastName, phone, email, address: street + ',' + city + ',' + postalCode }).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        localStorage.setItem('userId', res.data.user._id);
        history.push("/preIntvernotice");
      }
      else {
        console.log(res.data.errorMessage);
      }
    })
  }


  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="contentbody" style={{ margin: "-29px 10%" }}>
        <div className="left" style={{ width: "70%" }}>
        </div>
        <div className="right">
          <p>Please provide your contact information so we can reach you after you have completed your interview.</p><br />
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <div className='inputBox'>
                <label>Name</label>
                <input type="text" onChange={handleChange} name="firstName" id="" />
              </div>
              <div className='inputBox'>
                <label> LAST NAME</label><div></div>
                <input type="text" onChange={handleChange} name="lastName" id="" />
              </div>

            </div>
            <div className="inputgroup">
              <div className='inputBox'>
                <label>E-MAIL</label>
                <input type="text" onChange={handleChange} name="email" id="" />
              </div>
            </div>
            <div className="inputgroup">
              <div className='inputBox'>
                <label>PHONE</label>
                <input type="text" onChange={handleChange} name="phone" id="" />
              </div>
            </div>

            <div className="inputgroup">
              <div className='inputBox'>
                <label>LOCATION</label>
                <input type="text" onChange={handleChange} name="city" id="" placeholder="CITY" />
              </div>
              <div className='inputBox'>
                <input type="text" onChange={handleChange} name="street" id="" placeholder="ST" style={{ marginTop: "24px" }} />
              </div>
              <div className='inputBox' style={{ marginBottom: "20px" }}>
                <input type="text" onChange={handleChange} name="postalCode" id="" placeholder="ZIP" style={{ marginTop: "24px" }} />
              </div>
            </div>
            <button type='submit' className='button' style={{ marginLeft: "10px" }}>Continue</button>
          </form>

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

export default CandidateForm;