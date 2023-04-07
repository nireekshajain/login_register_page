import React, { useState } from "react";

export const Login =(props) => {

const [Email, setEmail] = useState('');
const [pass, setPass] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email);

}
  return (
    
    <div className="auth-form-container">
   
    <form className="login-form" onSubmit={handleSubmit}>
    <h2>LOGIN</h2>
        <label htmlFor="Email">Email</label>
        <input value={Email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log In</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
        {/* <p className="text">Or login using</p>
        

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google">
          <button type="submit">Sign In using Google</button>
          </div>
        </div> */}
    </form>
   
</div>
  )
}

export default Login;
