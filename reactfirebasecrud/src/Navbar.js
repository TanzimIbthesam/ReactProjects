 import {  useHistory,Link} from "react-router-dom";
import { auth } from "./firebase/config";
import getUser from "./GetUser";

const Navbar=()=>{
    const history=useHistory()
    const user=getUser();
    const logOut=async(e)=>{
      e.preventDefault()
     
      try {
        await auth.signOut()
        console.log("You have been logged out");
        history.push('/login')
      } catch (error) {
          console.log(error.message);
      }
        
      
    }
   
   return (
       <div>
         <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
          pink Color
        </a>
     
      </div>
      <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
         
          
         
          {user ?
               <li class="nav-item">
               <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <button onClick={logOut} class="px-6 py-1 bg-red-400 text-white font-serif">Logout</button>
               </a>
             </li>
           :
          <>
           <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <Link to="/register">Register</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <Link to="/login">Login</Link>
            </a>
          </li>
          </>
          
          
          }
         
        </ul>
      </div>
    </div>
  </nav>
       </div>
   
   )
}

export default Navbar;