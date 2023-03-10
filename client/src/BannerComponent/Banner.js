import './Banner.css'
import { useState, useEffect } from 'react';

function Banner()
{
    const [ BannerContent , setBannerContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           
if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
{
    setBannerContent();    
}
else
{
    setBannerContent(

        <div class="container-fluid p-0 mb-5">
    {/* Carousel Start */}

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
{/* Carousel End */}
</div>           
        );    
}
        },2000);  
       },[]);

  return(
    
    <div>
        {BannerContent}
    </div>
  
  )
}

export default Banner;