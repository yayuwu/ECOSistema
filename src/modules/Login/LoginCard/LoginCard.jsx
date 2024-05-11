import React from 'react'
import logo from '../../../assets/svg/logo.svg'
import '../../../assets/styles/Login/logincard.css'
import GoogleButton from '../GoogleAuthButton/GoogleButton'

export default function LoginCard(props){
  return(
    <div className='login-card'>
      <h1>{props.title}</h1>
      <p style={{padding: '10px 0'}}>{props.topText}</p>
      <img src={logo} alt="logo" style={{width: '100px', height: '80px', padding: '5px 0'}}/>
      <p style={{padding: '10px 0'}}>{props.bottomText}</p>
      <GoogleButton/>
    </div>
  )
}