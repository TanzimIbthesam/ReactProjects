
import { useEffect, useState } from 'react';
import './index.css'
// import Modal from './Modal'
import axios from 'axios'
import SingleProject from './SingleProject'
function App() {
  
  // const [modal,showModal]=useState(false);
  const [projects,setProjects]=useState([]);
  const handleDelete= (id) => {
    axios.delete('http://localhost:8000/allprojects/'+id)
     setProjects(projects.filter(project => project.id !== id));
  }
  const statusChange=(id)=>{
     console.log("Clicked")
      axios.get('http://localhost:8000/allprojects/'+id)
     setProjects(projects.find(project=>project.id===id));
      setProjects(!project.isCompleted)
    
  }
 
  useEffect(()=>{
    axios.get('http://localhost:8000/allprojects')
    .then((res)=>{
      setProjects(res.data)
    }).catch(err=>{
      console.log(err.message)
      // setError(err.message)
    })
  },[])
  return (
    <div className="App">
      {
      projects.map(project=>(
      <div key={project.id}>
       
      <SingleProject  project={project} handleDelete={handleDelete}  statusChange={statusChange}/>
        </div>
))
}
      
    </div>
  );
}

export default App;
