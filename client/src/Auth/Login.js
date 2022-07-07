import React, { useState } from 'react';
import { Input } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import { setAuthentication } from './auth';
import { Success } from '../Messages/messages';

export const Login = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',

  });

  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }


  const onFinish = async (e) => {
    e.preventDefault();
    await axios.post('/api/users/login', { email, password }).then(res => {
      if (res.status === 200) {
        setAuthentication(res.data, res.data.token);
        localStorage.setItem('role', res.data.role);
        Success(res.data.successMessage);
        props.history.push('/');
        window.location.reload();
      }
      else if (res.status === 201) {
        Error(res.data.errorMessage);
      }
      else {
        Error(res.data.errorMessage);
      }
    })

  };



  return (
    <>
      <div className='auth'>
        <div className='auth-inner'>
          <div className='text-center'>
            <div className='header'>
              <Link to="/">Real Voice</Link>
            </div>
            <form onSubmit={onFinish} className='p-4'>
              <div className="floating-label-group mb-3">
                <Input name='email' onChange={handleChange} size='small' placeholder="Email or Username" prefix={<UserOutlined />} />
              </div>
              <div className="floating-label-group">
                <Input.Password name='password' type='password' onChange={handleChange} size="small" placeholder="Password" prefix={<KeyOutlined />} />
              </div>
              <div className='d-flex justify-content-between mt-2'>
                <div>
                  <label className="form-check-label float-left mt-1 ml-2">
                    <input className="form-check-input" type="checkbox" /> Remember
                  </label>
                </div>
                <div>
                  <Link className='pass' to='/reset-password'>Lost Password?</Link>
                </div>
              </div>
              <div className='submit-btn-container'>
                <button type='submit' className='btn my-2 mt-3 w-100'>
                  Login
                </button>
              </div>
            </form>
            <div className='mt-2'>
              <p>
                New to <strong><b>Website</b>?</strong> <Link to='/signup' className='pass'>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
