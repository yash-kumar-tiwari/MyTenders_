import './Addsubcategory.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../apiURL';
 
function Addsubcategory()
{
  const [ output , setOutput ] = useState();
  const [ catName, setCatName ] = useState();
  const [ subCatName, setSubCatName ] = useState();
  const [ file, setFile ] = useState();
  const [ catDetails, setCatDetails ] = useState([]);


  useEffect(() => {
    axios.get(_webapiadmin+"fetchcategory").then((result)=>{
      console.log(result.data.catList);
      setCatDetails(result.data.catList);
    });  
  }, [])

  const handleChange = (event)=>{
    setFile(event.target.files[0]);    
  }

  const handleSubmit = (event)=>{
    // setOutput("Form Submitted")
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon',file);
    const config = {'content-type':'multipart/form-data'};
    axios.post(_webapiadmin+"addsubcategory", formData, config).then((result)=>{
      setCatName("");
      setSubCatName("");
      setOutput(result.data.output);
    });
  }


  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">Admin Home</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="">Home</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">Admin Home</p>
        </div>
    </div>
    {/* Page Header Start */}

    <div class="container">
      <div class="text-center">
        <h1>Add Sub Category</h1>

        <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="category">Category Name:</label>
                        <select class="form-control" value={catName} onChange={element=>setCatName(element.target.value)}>
                          <option>Select Category</option>
                          {
                            catDetails.map((row)=>(
                              <option>
                              {row.catnm}
                              </option>
                            ))
                          }
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="subcategory">Sub Category Name:</label>
                        <input type="text" class="form-control" value={subCatName} onChange={element=>setSubCatName(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="catFile">Sub Category Icon:</label>
                        <input type="file" class="form-control" onChange={handleChange} />
                    </div>

                    <button type="submit" class="btn btn-success">Add Sub Category</button>
                </form>
      </div>
    </div>
    </div>
    

  )
}

export default Addsubcategory;