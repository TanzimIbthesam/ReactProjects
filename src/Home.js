
import { useEffect, useState } from 'react';
import './index.css'
// import Modal from './Modal'
import axios from 'axios'
import SingleProject from './SingleProject'
// import AllRouter from './AllRouter';
// import Tanzim from './Tanzim'
const Home=()=> {

  const [projects,setProjects]=useState([]);
  //Fetch Projects 
  // const fetchProjects=async()=>{
  //   const res=await axios.get('http://localhost:8000/allprojects/')
  //   return res;

  // }
  // Fetch a single Project
  // const fetchSingleProject=async()=>{
  //   const res=await axios.get(`http://localhost:8000/allprojects/${id}`)
  //   return res;
  // }
  //Delete Tasks
  const handleDelete= (id) => {
    axios.delete('http://localhost:8000/allprojects/'+id)
     setProjects(projects.filter(project => project.id !== id));
  }
  const statusChange=(id)=>{
    //   const completed={isCompleted:!isCompleted}
    
   axios.patch(`http://localhost:8000/allprojects/${id}`,{
    // isCompleted: projects.isCompleted =! projects.isCompleted 
     isCompleted:projects.isCompleted
    
  })
    const newProjects = projects;
    setProjects([...newProjects]);
let p=newProjects.find((newProject) => {
     return newProject.id === id;
     
     
    });
   
      p.isCompleted = !p.isCompleted
    
    //   console.log(id)
    
    
    
}
 // Fetch Projects 

  useEffect(()=>{
    axios.get('http://localhost:8000/allprojects')
    .then((res)=>{
      setProjects(res.data)
    }).catch(err=>{
      console.log(err.message)
     
    })
   
  },[])
  return (
    <div className="App">
      {/* <AllRouter /> */}
      {
      projects.map(project=>(
      <div key={project.id}>
       
      <SingleProject  project={project} handleDelete={handleDelete}  statusChange={statusChange} />
     
        </div>
))
}
      
    </div>
  );
}

export default Home;
