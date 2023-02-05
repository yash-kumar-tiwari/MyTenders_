import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import Components
import Header from './HeaderComponent/Header';
import Banner from './BannerComponent/Banner';
import Nav from './NavComponent/Nav';
import Main from './MainComponent/Main';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Sidebar from './SidebarComponent/Sidebar';
import Footer from './FooterComponent/Footer';

function App() {
  return (

    <div class="wrapper">

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
                    <a href="/" class="nav-item nav-link active">Home</a>
                    <a href="/about" class="nav-item nav-link">About</a>
                    <a href="/service" class="nav-item nav-link">Services</a>
                    {/* <a href="/pricing" class="nav-item nav-link">Pricing</a> */}
                    <a href="/register" class="nav-item nav-link">Register</a>
                    <a href="/login" class="nav-item nav-link">Login</a>
                    <a href="/contact" class="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>
 {/* Navbar End */}
</div>


{/* Carousel Start */}
<div class="container-fluid p-0 mb-5">
<div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#header-carousel" data-slide-to="1"></li>
        <li data-target="#header-carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="img-fluid" src="assets/img/carousel-1.jpg" alt="Image"/>
            <div class="carousel-caption d-flex align-items-center justify-content-center">
                <div class="p-5" style={{"width": "100%", "max-width": "900px"}}>
                    <h5 class="text-white text-uppercase mb-md-3">Tender Bidding Portal</h5>
                    <h1 class="display-3 text-white mb-md-4">Bidding & Auction Related Services For Contractors</h1>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <img class="img-fluid" src="assets/img/carousel-2.jpg" alt="Image"/>
            <div class="carousel-caption d-flex align-items-center justify-content-center">
                <div class="p-5" style={{"width": "100%", "max-width":"900px"}}>
                    <h5 class="text-white text-uppercase mb-md-3">Tender Bidding Portal</h5>
                    <h1 class="display-3 text-white mb-md-4">Access Services without any Hurdles at Ease</h1>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <img class="img-fluid" src="assets/img/carousel-3.jpg" alt="Image"/>
            <div class="carousel-caption d-flex align-items-center justify-content-center">
                <div class="p-5" style={{"width": "100%", "max-width": "900px"}}>
                    <h5 class="text-white text-uppercase mb-md-3">Tender Bidding Portal</h5>
                    <h1 class="display-3 text-white mb-md-4">Happy Clients & Positive Reviews</h1>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{/* Carousel End */}



{/* About Start */}
<div class="container-fluid py-5">
    <div class="container">
        <div class="row align-items-center pb-1">
            <div class="col-lg-5">
                <img class="img-thumbnail p-3" src="assets/img/about.jpg" alt=""/>
            </div>
            <div class="col-lg-7 mt-5 mt-lg-0">
                <small class="bg-primary text-white text-uppercase font-weight-bold px-1">Who We Are</small>
                <h1 class="mt-2 mb-4">Effective and Less Time Consuming Project and Contract Related Services for Contractors</h1>
                <p class="mb-4">Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.</p>
                <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Read More</a>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{"height": "120px"}}>
                    <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                    <div class="d-flex flex-column">
                        <h5 class="font-weight-bold">Our Office</h5>
                        <p class="m-0">123 Street, New York, USA</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{"height": "120px"}}>
                    <i class="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                    <div class="d-flex flex-column">
                        <h5 class="font-weight-bold">Email Us</h5>
                        <p class="m-0">info@example.com</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{"height": "120px"}}>
                    <i class="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                    <div class="d-flex flex-column">
                        <h5 class="font-weight-bold">Call Us</h5>
                        <p class="m-0">+012 345 6789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* About End */}

{/* Footer Start */}
<div class="container-fluid bg-secondary text-white mt-5 pt-5 px-sm-3 px-md-5">
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
<div class="container-fluid py-4 px-sm-3 px-md-5">
<p class="m-0 text-center">
    &copy; <a class="font-weight-semi-bold" href="#">Tenders</a>. All Rights Reserved. Designed by
    <a class="font-weight-semi-bold" href="https://htmlcodex.com">Government of MP</a>
</p>
</div>
{/* Footer End */}


{/* Back to Top */}
<a href="#" class="btn btn-lg btn-primary back-to-top"><i class="fa fa-angle-up"></i></a>

    </div>

  );
}

export default App;