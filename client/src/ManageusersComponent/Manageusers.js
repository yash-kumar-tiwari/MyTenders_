import './Manageusers.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../apiURL';

 
function Manageusers()
{
  const [ userDetails, setUserDetails ] = useState([]);
  
  const usedetails = ()=>{
    axios.get(_webapiadmin+"manageusers").then((result)=>{
      console.log(result.data.userDetails)
      setUserDetails(result.data.userDetails);
    });
  }

  useEffect( usedetails,[] );

  const manageUserStatus = (_id, status)=>{
    // alert(_id+"----"+status)
    // var apiURL = _webapiadmin+"manageuserstatus?status="+status+"&regid="+_id
    var apiURL = _webapiadmin+"manageuserstatus/"+status+"/"+_id

    axios.get(apiURL).then((result)=>{
        // window.location.reload();
        // console.log(result.data);

        usedetails();

        // Navigate("/admin/manageusers");
    });
  }
    
  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">Manage Users</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="">Home</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">Manage Users</p>
        </div>
    </div>
    {/* Page Header Start */}

    <div class="container">
      <div class="text-center">
        <h1>View & Manage User Details</h1>
        <table class='table table-bordered table-hover'>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Address</td>
            <td>City</td>
            <td>Gender</td>
            <td>Info</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
            {
              userDetails.map((row)=>(
                <tr>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mobile}</td>
                  <td>{row.address}</td>
                  <td>{row.city}</td>
                  <td>{row.gender}</td>
                  <td>{row.info}</td>
                  <td>
                    {
                      row.status == 0 &&
                      <button className='btn btn-success' onClick={()=>{manageUserStatus(row._id,"verify")}}>Verify User</button>
                    }
                    {
                      row.status == 1 &&
                      <button className='btn btn-warning' onClick={()=>{manageUserStatus(row._id,"block")}}>Block User</button>
                    }
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete User</button>
                  </td>
                </tr>
              ))
            }
        </table>
      </div>
    </div>
    </div>
    

  )
}

export default Manageusers;