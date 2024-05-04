import '../css/login.css'
import React, { useState } from 'react';
const Email = () => {
const [email, setEmail] = useState('');
const [isValid, setIsValid] =useState(false);
const handleEmailChange = (event) => {
const newEmail = event.target.value;
setEmail(newEmail);
setIsValid(validateEmail(newEmail));
};
const validateEmail = (email) => {
// Regular expression to check emailformat
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
};
return (
   <div>
    <div className='input'>
        <div className='italic'><i>Email :</i></div>
           <input type="email" placeholder="Enter email address" value={email} onChange={handleEmailChange}/>
    </div>
           {isValid ? <p className='validate'>Email is valid</p> :<p className='validate'>Email is not valid</p>}
        
   </div>    
);
};
export default Email;