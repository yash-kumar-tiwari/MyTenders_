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
import Logout from './LogoutComponent/Logout';
import Sidebar from './SidebarComponent/Sidebar';
import Footer from './FooterComponent/Footer';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import Editprofile from './EditprofileComponent/Editprofile';
import Changepassword from './ChangepasswordComponent/Changepassword';

//import Admin Components
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import Addcategory from './AddCategoryComponent/Addcategory';
import Addsubcategory from './AddSubCategoryComponent/Addsubcategory';
import Launchtender from './LaunchtenderComponent/Launchtender';

//import User Components
import Userhome from './UserhomeComponent/Userhome';
import Viewtenders from './ViewtendersComponent/Viewtenders';
import Viewsubcategory from './ViewsubcategoryComponent/Viewsubcategory';
import Showtenders from './ShowtendersComponent/Showtenders';
import Applytenders from './ApplytendersComponent/Applytenders';

function App() {
  return (
    <div class="wrapper">
       {/* Link Components   */}

       <Nav/>

       <Routes>
         <Route path="/" element={<Banner/>}></Route>
       </Routes>

       <Routes>
         <Route path="/" element={<Main />} ></Route>
         <Route path="/about" element={<About />} ></Route>
         <Route path="/contact" element={<Contact />} ></Route>
         <Route path="/service" element={<Service />} ></Route>
         <Route path="/register" element={<Register />} ></Route>
         <Route path="/verifyuser/:email" element={<Verifyuser />} ></Route>
         <Route path="/login" element={<Login />} ></Route>
         <Route path="/admin" element={<Adminhome />} ></Route>
         <Route path="/admin/manageusers" element={<Manageusers />} ></Route>
         <Route path="/admin/addcategory" element={<Addcategory />} ></Route>
         <Route path="/admin/addsubcategory" element={<Addsubcategory />} ></Route>
         <Route path="/admin/launchtender" element={<Launchtender />} ></Route>
         <Route path="/admin/epadmin" element={<Editprofile />} ></Route>
         <Route path="/admin/cpadmin" element={<Changepassword />} ></Route>
         <Route path="/user/epuser" element={<Editprofile />} ></Route>
         <Route path="/user/cpuser" element={<Changepassword />} ></Route>
         <Route path="/user" element={<Userhome />} ></Route>
         <Route path="/user/viewtenders" element={<Viewtenders />} ></Route>
         <Route path="/user/viewsubcategory/:catnm" element={<Viewsubcategory />} ></Route>
         <Route path="/user/showtenders/:subcatnm" element={<Showtenders />} ></Route>
         <Route path="/user/applytender/:tenid" element={<Applytenders />} ></Route>
         {/* <Route path="/user/viewsubcategory/:catnm/:subcatnm" element={<Applytenders />} ></Route> */}
         <Route path="/logout" element={<Logout />} ></Route>

       </Routes>

       <Footer/>

       {/* Back to Top */}
        <a href="#" class="btn btn-lg btn-primary back-to-top"><i class="fa fa-angle-up"></i></a>

    </div>
  );
}

export default App;