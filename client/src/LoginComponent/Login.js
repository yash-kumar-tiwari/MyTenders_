import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _webapi } from '../apiURL';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();


    const handleSubmit = (event)=>{
        event.preventDefault();
        var userDetails = { "email":email, "password":password };
        // console.log(name);
        // console.log(email);

        axios.post(_webapi+"login", userDetails).then((result)=>{
            // console.log(result.data);
            // console.log(result.data.output);
            // console.log(result.data.userDetails)
            if(result.data.token == "error")
            {
                // console.log("hello")
                setOutput("Invalid User or Verify Your Account...");
            }
            else
            {
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("_id", result.data.userDetails._id);
                localStorage.setItem("name", result.data.userDetails.name);
                localStorage.setItem("email", result.data.userDetails.email);
                localStorage.setItem("mobile", result.data.userDetails.mobile);
                localStorage.setItem("address", result.data.userDetails.address);
                localStorage.setItem("city", result.data.userDetails.city);
                localStorage.setItem("gender", result.data.userDetails.gender);
                localStorage.setItem("role", result.data.userDetails.role);
                localStorage.setItem("info", result.data.userDetails.info);

                if(result.data.userDetails.role == "admin")
                {
                    navigate("/admin");
                }
                else
                {
                    navigate("/user");
                }
            }
            // setOutput("Login Successfully");
            setEmail("");
            setPassword("");
        }).catch((err)=>{
            console.log(err);
        });
    }

  return(
    
    <div>
        {/* Page Header Start */}
<div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
    <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">Login</h1>
    <div class="d-inline-flex text-white">
        <p class="m-0"><a class="text-white" href="">Home</a></p>
        <p class="m-0 px-2">/</p>
        <p class="m-0">Login</p>
    </div>
</div>
{/* Page Header Start */}


{/* About Start */}
<div class="container-fluid py-5 mb-5">
    <div class="container">
        <div class="row">
            {/* <div class="col-lg-5">
                <div
                    class="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                    <i class="fa fa-5x fa-award text-primary mb-4"></i>
                    <h1 class="display-2 text-white mb-2" data-toggle="counter-up">25</h1>
                    <h2 class="text-white m-0">Years Experience</h2>
                </div>
            </div> */}
            <div class="col-lg-12 pt-5 pb-lg-5">
                <h1 class="text-secondary font-weight-semi-bold text-uppercase mb-3">Login Page</h1>
                <h2>Login Here!!!</h2>
                <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input onKeyUp={"checkEmail(this.value)"} type="email" class="form-control" name="email" value={email} onChange={element=>setEmail(element.target.value)} />
                        <span id="emailRes"></span>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" name="password" value={password} onChange={element=>setPassword(element.target.value)} />
                    </div>

                    <button type="submit" class="btn btn-success">Login</button>
                </form>

            </div>
        </div>
    </div>
</div>
{/* About End */}

    </div>

  )
}

export default Login;