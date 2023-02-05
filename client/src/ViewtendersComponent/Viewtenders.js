import './Viewtenders.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { Link } from 'react-router-dom';

function Viewtenders()
{
  const [ catDetails, setCatDetails ] = useState([]);

  useEffect(() => {
    axios.get(_webapiuser+"fetchcategory").then((result)=>{
      console.log(result.data.catList);
      setCatDetails(result.data.catList);
    });  
  }, []);

  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">View Tenders</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="">Home</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">Viewtenders</p>
        </div>
    </div>
    {/* Page Header Start */}

    <div class="container">
      <div class="text-center">
        <h1>Category >>  </h1>
        <br/>
        <center>
        <div id='categorymain'>
        {
          catDetails.map(element=>{
            const image = '/assets/uploads/categoryicons/'+element.caticonnm;
            const path = '/user/viewsubcategory/'+element.catnm;
            
            return(
              <Link to={path}>
              <div class='categorypart'>
              <br/>
              <img src={image} height='100' width='120' alt=''/>
              <br/>
              <b>{element.catnm}</b>
              </div>
              </Link>
            )
          })
        }
        </div>
        </center>    
      </div>
    </div>
    </div>
    

  )
}

export default Viewtenders;