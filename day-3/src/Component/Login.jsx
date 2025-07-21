import { useState } from "react";

function Login(){
    const[UserData,setUserData]=useState()
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