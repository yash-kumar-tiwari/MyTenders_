import './Viewsubcategory.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { Link, useParams } from 'react-router-dom';

function Viewsubcategory()
{
  const params = useParams();
  const [ subCatDetails, setSubCatDetails ] = useState([]);

  useEffect(() => {
    axios.get(_webapiuser+"showsubcategory/"+params.catnm).then((result)=>{
      console.log(result.data.subCatList);
      setSubCatDetails(result.data.subCatList);
    });  
  }, []);


  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">View Sub Category</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="">Home</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">View Sub Category</p>
        </div>
    </div>
    {/* Page Header Start */}

    <div class="container">
      <div class="text-center">
        <h1>Sub Category >> {params.catnm}</h1>
        <br/>
        <center>
        <div id='categorymain'>
        {
          subCatDetails.map(element=>{
            const image = '/assets/uploads/subcategoryicons/'+element.subcaticonnm;
            {/* const path = '/user/viewsubcategory/'+element.catnm+"/"+element.subcatnm;; */}
            {/* const path = '/user/applytender/'+element.catnm+"/"+element.subcatnm;; */}
            const path = '/user/showtenders/'+element.subcatnm;

            return(
              <Link to={path}>
              <div class='categorypart'>
              <br/>
              <img src={image} height='100' width='120' alt=''/>
              <br/>
              <b>{element.subcatnm}</b>
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

export default Viewsubcategory;