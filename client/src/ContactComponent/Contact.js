import './Contact.css'
import { useState } from 'react';

//other component loading with data sharing 
import Test from '../TestComponent/Test';
 
function Contact()
{
    const [a, setA] = useState(100);
    const [b, setB] = useState(200);
    const [users , setUsers] = useState([{"uid":107,"username":"user1@gmail.com","password":12345},{"uid":108,"username":"user2@gmail.com","password":12125},{"uid":109,"username":"user3@gmail.com","password":12312}]);

  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">Contact</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="">Home</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">Contact</p>
        </div>
    </div>
    {/* Page Header Start */}

    <div class="container">
      <div class="text-center">
    <center>

      <Test a={a} b={b} c={a+b} />

      <hr/> <hr/>
    <h1>View & Manage User Details: </h1>
    <table class="table table-bordered table-hover">
      <tr class="table table-dark">
        <th>User ID</th>
        <th>Username</th>
        <th>password</th>
      </tr>
    {
      users.map((row,i)=>(
        <tr>
          <td>{row.uid}</td>
          <td>{row.username}</td>
          <td>{row.password}</td>
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

export default Contact;