import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Create=()=>{
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const[isCompleted]=useState(false);
    // const [project,setProject]=useState({
    //      title:'',
    //      description:'',
    //      isCompleted:false
    // })
    const [id]=useState(Math.floor(Math.random() *1000))
    const history=useHistory();
    const handleClick=(e)=>{
        e.preventDefault();
        const project={id,title,description,isCompleted};
        
        axios.post(' http://localhost:8000/allprojects',project)
        .then((response=>console.log(response)))
        history.push('/')
     }
return(
    <div>
    <div className="mx-auto xl:max-w-2xl max-w-xl border border-gray-100 bg-white mt-32 rounded-xl">
    <h1 class="text-2xl font-serif mt-8">Add a Project</h1>
    <form onSubmit={handleClick}>
    <input type="text" 
    placeholder="Enter a title" 
    class="placeholder-gray-800 py-1 xl:px-24 px-12 border-b-2 border-gray-100 rounded-sm" 
    onChange={(e) => setTitle(e.target.value)}/><br></br>
    <textarea 
    class="xl:w-3/4 w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none mt-1" 
    rows="4" 
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Enter a description">Enter a Description</textarea><br></br>
    <button class="px-4 py-1 rounded-xl border-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-serif fold-bold w-32 mt-1">SEND</button>  
    </form>
    
    </div>
    
    </div>


   
)
}


export default Create;