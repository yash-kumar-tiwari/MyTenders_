import './Nav.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav()
{
    const [ NavContent , setNavContent ] = useState();
    const [ TrackEmail , setTrackEmail ] = useState(localStorage.getItem("email"));

useEffect(()=>{
    setInterval(()=>{
           
if(localStorage.getItem("role")=="admin")
{
setNavContent(
<div class="container-fluid nav-bar p-0">
{/* Navbar Start */}

    <div class="container-lg p-0">
        <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0 text-white display-4"><span class="text-primary">T</span>en<span class="text-primary">D</span>ers</h1>
            </a>
             <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav ml-auto py-0">
                    <a class="nav-item nav-link"><Link to={"/admin"}>Admin Home</Link></a>
                    <a class="nav-item nav-link"><Link to={"/admin/manageusers"}>Manage Users</Link></a>
                    <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Manage Category</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                            <a class="nav-item nav-link"><Link to={"/admin/addcategory"}>Add Category</Link></a>
                            <a class="nav-item nav-link"><Link to={"/admin/addsubcategory"}>Add Sub Category</Link></a>
                    </div>
                        </div>
                    {/* {/* <a class="nav-item nav-link"><Link to={"/register"}>Register</Link></a> */}
                    <a class="nav-item nav-link"><Link to={"/admin/launchtender"}>Launch Tender</Link></a>
                    <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Settings</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                            <a class="nav-item nav-link"><Link to={"/admin/epadmin"}>Edit Profile</Link></a>
                            <a class="nav-item nav-link"><Link to={"/admin/cpadmin"}>Change Password</Link></a>
                            </div>
                    </div>
                    <a class="nav-item nav-link"><Link to={"/logout"}>Logout</Link></a>
                    <a style={{"color":"wheat" }}  class="nav-item nav-link"><b>Welcome Admin<br/>{TrackEmail}</b></a>
                </div>
            </div>            
        </nav>
    </div>
{/* Navbar End */}
</div>
);    
}

else if(localStorage.getItem("role")=="user")
{
setNavContent(
<div class="container-fluid nav-bar p-0">
{/* Navbar Start */}

    <div class="container-lg p-0">
        <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0 text-white display-4"><span class="text-primary">T</span>en<span class="text-primary">D</span>ers</h1>
            </a>
             <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav ml-auto py-0">
                    <a class="nav-item nav-link"><Link to={"/user"}>User Home</Link></a>
                    <a class="nav-item nav-link"><Link to={"/user/viewtenders"}>View Tenders</Link></a>
                    {/*<a class="nav-item nav-link"><Link to={"/service"}>Services</Link></a> */}
                    {/* <Link><a  class="nav-item nav-link">Pricing</a></Link> */}
                    {/* <a class="nav-item nav-link"><Link to={"/register"}>Register</Link></a>
                    <a class="nav-item nav-link"><Link to={"/contact"}>Contact</Link></a> */}
                    <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Settings</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                            <a class="nav-item nav-link"><Link to={"/user/epuser"}>Edit Profile</Link></a>
                            <a class="nav-item nav-link"><Link to={"/user/cpuser"}>Change Password</Link></a>
                            </div>
                    </div>
                    <a class="nav-item nav-link"><Link to={"/logout"}>Logout</Link></a>
                    <a style={{"color":"wheat" }}  class="nav-item nav-link"><b>Welcome User<br/>{TrackEmail}</b></a>
                </div>
            </div>            
        </nav>
    </div>
{/* Navbar End */}
</div>           
);    
}             

else
{
setNavContent(
<div class="container-fluid nav-bar p-0">
{/* Navbar Start */}

    <div class="container-lg p-0">
        <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0 text-white display-4"><span class="text-primary">T</span>en<span class="text-primary">D</span>ers</h1>
            </a>
             <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav ml-auto py-0">
                    <a class="nav-item nav-link"><Link to={"/"}>Home</Link></a>
                    <a class="nav-item nav-link"><Link to={"/about"}>About</Link></a>
                    <a class="nav-item nav-link"><Link to={"/service"}>Services</Link></a>
                    {/* <Link><a  class="nav-item nav-link">Pricing</a></Link> */}
                    <a class="nav-item nav-link"><Link to={"/register"}>Register</Link></a>
                    <a class="nav-item nav-link"><Link to={"/login"}>Login</Link></a>
                    <a class="nav-item nav-link"><Link to={"/contact"}>Contact</Link></a>
                </div>
            </div>            
        </nav>
    </div>
{/* Navbar End */}
</div>            
);    
}
    },2000);  
},[]);  
    

  return (
    <div>
        {NavContent}
    </div>
    
  )
}

export default Nav;