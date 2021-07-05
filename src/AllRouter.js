import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import App from './App'
// import Create from './Create'
import CreateTwo from './CreateTwo'
 import Navbar from './Navbar'
  import Home from './Home'
  import EditProject from "./EditProject";

const AllRouter=()=>{
    return(
        <Router>
        <div className="App">
           <Navbar /> 
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <CreateTwo />
              </Route>
              <Route path="/allprojects/:id">
                <EditProject />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
                  
    )
    
}
 export default AllRouter;