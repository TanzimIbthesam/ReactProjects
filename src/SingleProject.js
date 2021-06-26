import { useState } from "react";
// import axios from 'axios'
 
const SingleProject=({project,handleDelete,statusChange})=>{
    const [details,setDetails]=useState(false)
    const showDetails=(e)=>{
         e.preventDefault();
           setDetails(!details)
    }

 
    
   
   
 return (
    <div className="bg-white py-1  border-l-4 border-pink-600 rounded-md xl:w-1/3 w-full mx-auto  mt-3 ">
        <div className="flex justify-between">
        <div>
            <p className="text-black font-serif text-center xl:text-left pl-4 pt-4 text-md font-bold cursor-pointer" onClick={showDetails}>{project.title}</p>
           
            </div>
            <div className="p-3 ">
                        <span onClick={()=>{statusChange()}}  class="material-icons cursor-pointer hover:text-gray-300 ">done</span>
                        <span class="material-icons cursor-pointer hover:text-gray-300">edit</span>
                        <span onClick={()=>handleDelete(project.id)}  class="material-icons cursor-pointer hover:text-gray-300">delete</span>
                        

                    </div>
            </div>
              
               
                 {details && <div className="py-2  bg-white my-1">
                 <p className="text-black font-serif text-center xl:text-left pl-4 pt-2 text-sm">{project.description}</p>
                  </div>}
                  
                 
                
                 
     </div>

 )
}

export default SingleProject;