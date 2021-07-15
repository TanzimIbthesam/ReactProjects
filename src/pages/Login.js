import { useContext } from "react"
import { useHistory} from "react-router"

import FirebaseContext from "../context/firebase"

const Login=()=>{
    const history={useHistory}
    return(
        <div>
            <h1>Welcome to Login Page</h1>
        </div>
    )
}

export default Login