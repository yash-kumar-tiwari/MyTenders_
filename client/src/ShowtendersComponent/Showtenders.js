import './Showtenders.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { useNavigate, Link, useParams } from 'react-router-dom';

function Showtenders()
{
  const Navigate = useNavigate();
  const params = useParams();
  const [ tenderDetails, setTenderDetails ] = useState([]);

  useEffect(() => {
    axios.get(_webapiuser+"showtenders/"+params.subcatnm).then((result)=>{
      console.log(result.data.tenDetails);
      setTenderDetails(result.data.tenDetails);
    });  
  }, []);

  const applyTender = (_id)=>{

    Navigate("/user/applytender/"+_id)

    // axios.get(_webapiuser+"applytender/"+_id).then((result)=>{

    //     // window.location.reload();
    //     // var url = "applytender?tenderid="+_id+"&enddate="+enddate
    //     Navigate("/user/applytender/"+_id)
    // })
  }

  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">Show Tenders</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="">Home</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">Show Tenders</p>
        </div>
    </div>
    {/* Page Header Start */}

    <div class="container">
      <div class="text-center">
        <h1>Search Sub Category >> {params.subcatnm}</h1>
        <br/>
        <center>
        <table className='table table-hover'>
          <tr className='table table-bordered table-info'>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Tender Document</th>
            <th>Last Date</th>
            <th>Info</th>
            <th>Action</th>
          </tr>
          {
              tenderDetails.map((row)=>(
                <tr>
                  <td>{row._id}</td>
                  <td>{row.title}</td>
                  <td>{row.subcatnm}</td>
                  <td>{row.tenderdesc}</td>
                  <td>{row.tenderdocnm}</td>
                  <td>{row.enddate}</td>
                  <td>{row.info}</td>
                  <td>
                  <a onClick={()=>{applyTender(row._id)}}>
                    <button type="button" class="btn btn-info btn-sm">Apply Tender</button>
                  </a>
                  </td>
                </tr>
              ))
            }
        </table>
        </center>    
      </div>
    </div>
    </div>
  )
}

export default Showtenders;