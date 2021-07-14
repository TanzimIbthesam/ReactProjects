import { useEffect, useState } from "react";
import { db } from "./firebase/config";
import GetUser from './GetUser'
const Home=()=>{
      const user=GetUser();
       const [mytodos,setTodos]=useState('')

       const [text,setText]=useState([])
       useEffect(()=>{
           const docRef=db.collection('todos').doc(user.uid)
           docRef.onSnapshot((docSnap)=>{
                 if(docSnap.exists){
                       setTodos(docSnap.data().todos)
                  
                 }
           })
       },[user.uid])
    const addTodo=()=>{
      db.collection("todos").doc(user.uid).set({
             todos:[...mytodos,text]
       });
       
    }
 return(
      <div className="container mx-auto w-1/2 m-40">
             <div className="text-red-300 font-serif text-2xl">Add Todos</div>
             <input type="text"value={text} onChange={(e)=>setText(e.target.value)} className="px-6 py-1 border border-gray-300" /><br></br>
             <button onClick={addTodo} className="bg-pink-500 text-white font-serif px-6 py-1 mt-4">Add Todos</button>
            
             {
                   mytodos.map(todo=>{
                         return(
                               <div>
                                     {todo}
                               </div>
                         )
                   })
             }
             
      </div>
 )
}

export default Home;