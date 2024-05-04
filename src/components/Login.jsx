
import Bupup from './LoginComponent/Bupup';
import Email from './LoginComponent/Email';
import Password from './LoginComponent/Password';
import './css/login.css'
const Login = () =>{

return (

<div className='login'>
   <div >
   <Bupup/>
     <div>
        <Email/>
     </div>
   </div> 
        <Password/>
</div>
      
);
};
export default Login;
