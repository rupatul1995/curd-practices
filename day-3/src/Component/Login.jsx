import { useState } from "react";

function Login(){
    const[UserData,setUserData]=useState({email:"" ,password:""});


    function handlechange(event){
        setUserData({...UserData,[event.target.name]:event.target.value});
    }
    return (
        <div>
            <h1>Login</h1>
<form>
    <label>Email</label>
    <input name="email"  type="email"/>
  <br></br>
    <label>Password</label>
    <input name="password"  type="password"/><br></br>
    <button type="submit" name="submit">Submit</button>
</form>

        </div>
    );
}
export default Login;