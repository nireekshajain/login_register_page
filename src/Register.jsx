import React, { useState } from "react";

export const Register = (props) => {
    const [Email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [id, setId] = useState(''); 
    const [name, setName] = useState(''); 


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
    }
  return (
    <div className="auth-form-container">
        <h2>REGISTER</h2>
<form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Full Name</label>
    <input value={name} name="name" onChange={(e) => setName(e.target.value)} type="name" placeholder="John Doe" />
    <label htmlFor="id">Accolite ID</label>
    <input value={id} id="id" onChange={(e) => setId(e.target.value)} type="id" placeholder="EMP0000" />
    <label htmlFor="email">Email</label>
    <input value={Email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
    <label htmlFor="password">Password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
    <button type="submit">Log In</button>
</form>
<button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
</div>
      )
}

export default Register; 
