import './Footer.css';
import { useState, useEffect } from 'react';

function Footer()
{
    const [ FooterContent , setFooterContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           
if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
{
    setFooterContent();    
}
else
{
    setFooterContent(
        <div class="container-fluid bg-secondary text-white mt-5 pt-5 px-sm-3 px-md-5">
{/* Footer Start */}
<div class="row pt-5">
    <div class="col-lg-3 col-md-6 mb-5">
        <a href="index.html" class="navbar-brand">
            <h1 class="m-0 mt-n2 text-white display-4"><span class="text-primary">T</span>en<span class="text-primary">D</span>ers</h1>
        </a>
        <p>We are Here to Providing you a Best Bidding Portal</p>
        <div class="d-flex justify-content-start mt-4">
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{"width":"38px", "height":"38px"}} href="#"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{"width": "38px", "height": "38px"}} href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{"width":"38px", "height": "38px"}} href="#"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{"width": "38px", "height": "38px"}} href="#"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 mb-5">
        <h5 class="font-weight-bold text-primary mb-4">Quick Links</h5>
        <div class="d-flex flex-column justify-content-start">
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Home</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>About Us</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Services</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Pricing</a>
            <a class="text-white" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Contact Us</a>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 mb-5">
        <h5 class="font-weight-bold text-primary mb-4">Popular Links</h5>
        <div class="d-flex flex-column justify-content-start">
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Home</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>About Us</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Services</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Pricing</a>
            <a class="text-white" href="#"><i class="fa fa-angle-right text-primary mr-2"></i>Contact Us</a>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 mb-5">
        <h5 class="font-weight-bold text-primary mb-4">Get In Touch</h5>
        <p>Divisional Directorate Office</p>
        <p><i class="fa fa-map-marker-alt text-primary mr-2"></i>Collectorate Square, Indore (M.P.), India</p>
        <p><i class="fa fa-phone-alt text-primary mr-2"></i>+XXX XXX XXXX</p>
        <p><i class="fa fa-envelope text-primary mr-2"></i>info@example.com</p>
    </div>
</div>
</div>

    );    
}
        },2000);  
       },[]);
  return(
  <div id='footer'>
{FooterContent}
<div class="container-fluid py-4 px-sm-3 px-md-5">
<p class="m-0 text-center">
    &copy; <a class="font-weight-semi-bold" href="#">Tenders</a>. All Rights Reserved. Designed by
    <a class="font-weight-semi-bold" href="https://htmlcodex.com">Government of MP</a>
</p>
{/* Footer End */}
</div>
  </div>
  )
}

export default Footer;