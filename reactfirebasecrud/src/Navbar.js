 import { Link } from "react-router-dom";

const Navbar=()=>{
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
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
             <button class="px-6 py-1 bg-red-400 text-white font-serif">Logout</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
       </div>
   
   )
}

export default Navbar;