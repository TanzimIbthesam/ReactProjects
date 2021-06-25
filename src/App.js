
import { useEffect, useState } from 'react';
import './index.css'
// import Modal from './Modal'
import axios from 'axios'
import SingleProject from './SingleProject'
function App() {
  
  // const [modal,showModal]=useState(false);
  const [projects,setProjects]=useState([]);
  const handleDelete= (id) => {
    axios.delete('http://localhost:8000/blogs/'+id)
     setProjects(projects.filter(project => project.id !== id));
  }
 
  useEffect(()=>{
    axios.get('http://localhost:8000/blogs')
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
       
      <SingleProject  project={project} handleDelete={handleDelete} />
        </div>
))
}
      
    </div>
  );
}

export default App;
