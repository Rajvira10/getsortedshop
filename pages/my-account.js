import React,{ useState } from "react";




const Myaccount = () => {
    const [signin,setSignin] = useState(true)
    return (  
        <div className="container myaccount">
            <h1>My account</h1>
            <div className="login-signup">
                <p className={`${signin? 'black':"white"}`} onClick={()=>setSignin(true)}>Login</p>
                <p className={`${signin? 'white':"black"}`} onClick={()=>setSignin(false)}>Signup</p> 
            </div>
            {signin?<form>
                <input type="text" placeholder="Username / Email"/><br />
                <input type="password" placeholder="Password" /><br />
                <div className="flex2">
                    <div><input type="checkbox" value= "Remember me"/>Remember me</div>
                    <u>Forgot Password?</u>
                </div>
                
                <input type="submit" value= "SIGN IN"/> 
            </form>:
            <form>
                <input type="text" placeholder="Email"/><br />
                <input type="text" placeholder="First Name" className='name'/><br />
                <input type="text" placeholder="Last Name" className="name"/><br />
                <input type="password" placeholder="Password"/><br />
                <input type="password" placeholder="Confirm Password" />
                <div>
                    <input type="checkbox" value= "Remember me"/>I accept the Terms of Service and Privacy Policy
                </div>
                
                <input type="submit" value= "SIGN UP"/> 
            </form>}
            
        </div>
    );
}

export default Myaccount;