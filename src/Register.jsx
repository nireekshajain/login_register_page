import React, { useState } from "react";

export const Register = (props) => {
    const [Email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // const [id, setId] = useState(''); 
    const [firstname, setFirstname] = useState(''); 
    const [lastname, setLastname] = useState(''); 
    const [address, setAddress] = useState(''); 
    const [phonenum, setPhonenum] = useState(''); 
    const [design, setDesign] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
    }
  return (
    <div className="auth-form-container">
        <h2>REGISTER</h2>
<form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <input value={Email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
   
    <label htmlFor="firstname">First Name</label>
    <input value={firstname} firstname="firstname" onChange={(e) => setFirstname(e.target.value)} type="firstname" placeholder="John" />
    
    <label htmlFor="lastname">Last Name</label>
    <input value={lastname} lastname="lastname" onChange={(e) => setLastname(e.target.value)} type="lastname" placeholder="Doe" />

    {/* <label htmlFor="id">Accolite ID</label>
    <input value={id} id="id" onChange={(e) => setId(e.target.value)} type="id" placeholder="EMP0000" />
     */}
     
    <label htmlFor="password">Password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

    <label htmlFor="design">Designation</label>
    <input value={design} design="design" onChange={(e) => setDesign(e.target.value)} type="design" placeholder="Manager" />

    <label htmlFor="design">Phone Number</label>
    <input value={phonenum} phonenum="phonenum" onChange={(e) => setPhonenum(e.target.value)} type="phonenum" placeholder="9873654520" />

    <label htmlFor="design">Address</label>
    <input value={address} address="address" onChange={(e) => setAddress(e.target.value)} type="address" placeholder="
    79248 Stracke Mountain, New York" />

    <button type="submit">Log In</button>
</form>
<button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
</div>
      )
}

export default Register; 
