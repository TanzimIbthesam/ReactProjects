const filteredNav=({updateFilter})=>{
    return (
        <div className="container mx-auto w-1/5 space-x-3">
        <button onClick={()=>updateFilter("all")}>View All</button>
        <button onClick={()=>updateFilter("completed")}>Completed</button>
        <button onClick={()=>updateFilter("onGoing")}>OnGoing</button>
        </div>
        
        // <button @click="updateFilter('onGoing')" :class="[current ==='onGoing' ? 'active' : '']">OnGoing</button>
        // <button @click="updateFilter('completed')" :class="[current ==='completed' ? 'active' : '']">Completed</button>
    
    )
}

export default filteredNav;