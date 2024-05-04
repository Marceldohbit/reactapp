import '../css/login.css'
import React, { useState } from 'react';
const Password = () => {


const [password, setPassword] = useState('');
const [isValid, setIsValid] = useState(false);
const handlePasswordChange = (event) => {
const newPassword = event.target.value;
setPassword(newPassword);
setIsValid(checkPassword(newPassword
));
};
const checkPassword = (password) => {
// Regular expressions to check forcapital letter, special character, and
// Regular expressions to check forcapital letter, special character, andnumber
const hasCapitalLetter = /[A-Z]/.test(password);
const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
const hasNumber = /\d/.test(password);
// Check if password meets all criteria
return password.length >= 7 &&
hasCapitalLetter && hasSpecialCharacter&& hasNumber;
 };


//email


return (

    
   <div className='password'>

      <div className='input'>
        <div className='italic'><i>Password:</i></div>
        <input  type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/>
        
      </div>
     {isValid ? <p className='validate'>Password is valid</p> : <p className='validate'>Password is not valid</p>} 
    </div>
);
};
export default Password;
