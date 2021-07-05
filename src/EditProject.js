import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";
 import axios from "axios";
const EditProject=()=>{
    
     const [editproject,setEditProject]=useState({
         title:'',
          description:'',
          isCompleted:false
     })
     const params=useParams();
     const projectid=params.id
      const history=useHistory();
     const handleChange=(e)=>{
         setEditProject({
             ...editproject,
             [e.target.name]:e.target.value
         })
     }
     const createProjects=(e)=>{
         e.preventDefault();
         console.log("Clicked");
         const newProjects={
             title:editproject.title,
             description:editproject.description,
             isCompleted:false,
            
         }
         axios.put(`http://localhost:8000/allprojects/${projectid}`,newProjects)
              .then((response=>console.log(response)))
              history.push('/')
              
         

     }
     useEffect(()=>{
        axios.get(`http://localhost:8000/allprojects/${projectid}`)
        .then(res=>
           
            setEditProject({
           
            title:res.data.title,
            description:res.data.description
        })).catch(err=>console.log(err))
    },[projectid])
   
return(
    <div>
    <div className="mx-auto xl:max-w-2xl max-w-xl border border-gray-100 bg-white mt-32 rounded-xl">
    <h1 class="text-2xl font-serif mt-8">Add a Project</h1>
    <form onSubmit={createProjects}>
    <input type="text"
    name="title" 
    placeholder="Enter a title" 
    class="placeholder-gray-800 py-1 xl:px-24 px-12 border-b-2 border-gray-100 rounded-sm" 
    onChange={handleChange} value={editproject.title}/><br></br>
    <textarea 
    class="xl:w-3/4 w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none mt-1" 
    rows="4" 
    // onChange={(e) => handleChange}
    onChange={handleChange} 
    name="description"
    value={editproject.description}
    placeholder="Enter a description">Enter a Description</textarea><br></br>
    <button class="px-4 py-1 rounded-xl border-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-serif fold-bold w-32 mt-1">SEND</button>  
    </form>
    
    </div>
    
    </div>


   
)
}


export default EditProject;