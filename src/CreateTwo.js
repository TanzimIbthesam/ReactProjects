import { useState } from "react";
import { useHistory } from "react-router-dom";
 import axios from "axios";
const CreateTwo=()=>{
    
     const [addproject,setAddProject]=useState({
         title:'',
          description:'',
          isCompleted:false
     })
     const history=useHistory();
     const handleChange=(e)=>{
         setAddProject({
             ...addproject,
             [e.target.name]:e.target.value
         })
     }
     const createProjects=(e)=>{
         e.preventDefault();
         const newProjects={
             title:addproject.title,
             description:addproject.description,
             isCompleted:false,
             id:Math.floor(Math.random() * 10000)
         }
         axios.post(' http://localhost:8000/allprojects',newProjects)
              .then((response=>console.log(response)))
              history.push('/')
              
         

     }
   
return(
    <div>
    <div className="mx-auto xl:max-w-2xl max-w-xl border border-gray-100 bg-white mt-32 rounded-xl">
    <h1 class="text-2xl font-serif mt-8">Add a Project</h1>
    <form onSubmit={createProjects}>
    <input type="text"
    name="title" 
    placeholder="Enter a title" 
    class="placeholder-gray-800 py-1 xl:px-24 px-12 border-b-2 border-gray-100 rounded-sm" 
    onChange={handleChange} /><br></br>
    <textarea 
    class="xl:w-3/4 w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none mt-1" 
    rows="4" 
    // onChange={(e) => handleChange}
    onChange={handleChange} 
    name="description"
    placeholder="Enter a description">Enter a Description</textarea><br></br>
    <button class="px-4 py-1 rounded-xl border-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-serif fold-bold w-32 mt-1">SEND</button>  
    </form>
    
    </div>
    
    </div>


   
)
}


export default CreateTwo;