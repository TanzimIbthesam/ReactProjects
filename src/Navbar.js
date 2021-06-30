import { Link } from "react-router-dom";

const Navbar=()=>{
   
    return (
         
        <div class=" mx-auto max-w-sm p-2">
    
        <ul class="flex ">
            <li class=""><Link class="" to="/"><p class="text-xl font-hairline font-serif">Home</p></Link></li>
            <li class=""><Link class="" to="/create"><p class="text-xl font-hairline font-serif ml-2">Create New Blog</p></Link></li>
            
     
        </ul>
    </div>
    )

}


export default Navbar;