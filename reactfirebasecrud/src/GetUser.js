import { useEffect, useState } from "react";
import { auth } from "./firebase/config";

const GetUser=()=>{
    const [user,SetUser]=useState('');
      useEffect(()=>{
          auth.onAuthStateChanged(user=>{
              if(user){
                  SetUser(user)
              }else{
                  SetUser(null)
              }
          })
      })
    return user;
}

export default GetUser;