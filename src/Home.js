import { useEffect, useState } from 'react';
import './index.css'
// import Modal from './Modal'
import axios from 'axios'
import SingleProject from './SingleProject'
import FilteredNav from './FilteredNav';

const Home=()=> {

  const [projects,setProjects]=useState([]);
  const [currentFilter,setCurrentFilter]=useState('all');

  const updateFilter=(newFilter)=>{
    setCurrentFilter(newFilter)
  }
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
     isCompleted: projects.isCompleted =! projects.isCompleted
    
  })
      const newProjects = projects;
      setProjects([...newProjects]);
let p=projects.find((newProject) => {
     return newProject.id === id;
     });
   p.isCompleted = !p.isCompleted
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
  let jsx=(
   
    projects.map(project=>(
      
      <div key={project.id}>
       
      <SingleProject  project={project} handleDelete={handleDelete}  statusChange={statusChange} />
     
        </div>
))

  )
   if(currentFilter==="onGoing"){
   jsx=projects.filter(AllProject=>!AllProject.isCompleted).map(project=>(
      
       <div key={project.id}>
       
      <SingleProject  project={project} handleDelete={handleDelete}  statusChange={statusChange} />
     
        </div>
 ))
      
   }else if(currentFilter==="completed"){
     jsx=projects.filter(AllProject=>AllProject.isCompleted).map(project=>(
      
      <div key={project.id}>
       
       <SingleProject  project={project} handleDelete={handleDelete}  statusChange={statusChange} />
     
         </div>
 ))

   }else{
     jsx=projects.map(project=>(
      
      <div key={project.id}>
       
       <SingleProject  project={project} handleDelete={handleDelete}  statusChange={statusChange} />
     
         </div>
 ))


   }
  return (
    <div className="App">
      {/* <AllRouter /> */}
      <FilteredNav updateFilter={updateFilter} current={currentFilter} />
      {jsx}
      
    </div>
  );
}

export default Home;

