import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import App from './App'
import Create from './Create'
 import Navbar from './Navbar'
  import Home from './Home'

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
                <Create />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
                  
    )
    
}
 export default AllRouter;