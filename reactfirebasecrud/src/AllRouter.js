import { useEffect, useState } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { auth } from "./firebase/config";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

const AllRouter=()=>{
    const [user,setUser]=useState('')
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
    })
    return(
        <Router>
             <div>
        <Navbar  />
        <Switch>
        <Route exact path="/">
                 <Home user={user} />
            </Route>
            <Route path="/login" component={Login}>
                 
            </Route>
            <Route path="/register" component={Register}>
                 
            </Route>
        </Switch>
    </div>

        </Router>
       

    )
  

}

export default AllRouter;