import { db } from "./firebase/config";

const Home=()=>{
    const addTodo=()=>{
          db.collection("todos")
    }
 return(
      <div className="container mx-auto w-1/2 m-40">
             <div className="text-red-300 font-serif text-2xl">Add Todos</div>
             <input type="text" className="px-6 py-1 border border-gray-300" /><br></br>
             <button onClick={addTodo} className="bg-pink-500 text-white font-serif px-6 py-1 mt-4">Add Todos</button>
      </div>
 )
}

export default Home;