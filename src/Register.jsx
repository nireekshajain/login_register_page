import React, { useState } from "react";


export const Register = (props) => {
    const [Email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [id, setId] = useState(''); 
    const [firstname, setFirstname] = useState(''); 
    const [lastname, setLastname] = useState(''); 
    const [pass1, setPass1] = useState(''); 
    const [phonenum, setPhonenum] = useState(''); 
    // const [design, setDesign] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
    }
  return (
    <div className="auth-form-container">
        
<form className="register-form" onSubmit={handleSubmit}>
<h2>REGISTER</h2>

    <table>
        <tr>
            <td>
                <label htmlFor="email">Email:</label>
                <input value={Email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            </td>
            <td>
                <label htmlFor="id">Accolite ID</label>
                <input value={id} id="id" onChange={(e) => setId(e.target.value)} type="id" placeholder="EMP0000" />
            </td>
        </tr>

        <tr>
            <td>
                <label htmlFor="firstname">First Name</label>
                <input value={firstname} firstname="firstname" onChange={(e) => setFirstname(e.target.value)} type="firstname" placeholder="John" />
            </td>

            <td>
                <label htmlFor="lastname">Last Name</label>
                <input value={lastname} lastname="lastname" onChange={(e) => setLastname(e.target.value)} type="lastname" placeholder="Doe" />
            </td>
        </tr>

        <tr>
            <td>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </td>

            <td>
                <label htmlFor="pass1">Confirm Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </td> 
        </tr>

        <tr>
            <td>
                <label htmlFor="phonenum">Phone Number</label>
                <input value={phonenum} phonenum="phonenum" onChange={(e) => setPhonenum(e.target.value)} type="phonenum" placeholder="9873654520" />
            </td>
        </tr>
    </table>
    {/* <label htmlFor="design">Address</label>
    <input value={address} address="address" onChange={(e) => setAddress(e.target.value)} type="address" placeholder="
    79248 Stracke Mountain, New York" /> */}

    <button type="submit">Register</button>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
</form>

</div>
      )
}

export default Register; 
