import React from 'react'
import './LoginForm.css'

import userIcon from '../components/Assets/person.png'
import passwordIcon from '../components/Assets/password.png'
import emailIcon from '../components/Assets/email.png'

export default function LoginForm() {
  return (
    <div>
      <div className='loginContainer'>
        <div className='header'>
            <div className='text'>
                Sign Up
            </div>
            <div className='UnderLIne'>

            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src= {userIcon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>
                <div className='input'>
                    <img src={emailIcon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className='input'>
                    <img src={passwordIcon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className="forgotPassword">forgot password ? 
                <span>
                     Click Here
                </span>
            </div>
            <div className='submitContainer'>
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>

        </div>
      </div>
    </div>
  )
}
