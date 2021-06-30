import { useState, useEffect } from 'react';
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null);
 
  const [error, setError] = useState(null);

  useEffect(()=>{
    console.log("Use Effect");

  axios.get(url)
    .then(res => {
       
          setData(res.data)
          
        }
      
    ).catch(err=>{
      //   throw new Error("Could not fetch the data")
      err.message="Could not fetch the data";
        console.log(err.message)
       setError(err.message)
    })
},[url])

  return { data, error };
}
 
export default useFetch;
