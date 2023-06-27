
import React, { useEffect } from 'react'

import PostCard from './PostCard'
import { useContext } from 'react'
import { myContext } from '../CustomProviderComp'
import { useState } from 'react'


function Mytodos() {
    const [allpost, setAllpost] = useState([]);
    const {isLogin} = useContext(myContext);
    
   // console.log(isLogin);
   const  getposts = ()=>{
  
    fetch("https://lonely-purse-colt.cyclic.app/todo", {
      method : "GET",
      headers : {
        'Authorization' : `Bearer ${isLogin}`
      }
    }).then((res)=>res.json())
    .then((res)=>{setAllpost(res.alltodos); console.log(res)})
    .catch((err)=>{console.log(err)})
   }

  
  useEffect(()=>{getposts()},[])
    return (
        <div> 
           <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div><h2 style={{color:"tomato"}}>Task</h2></div>
            <div><p style={{color:"tomato"}}>Status</p></div>
            <div><p style={{color:"tomato"}}>Tag</p></div>
            <div><p style={{color:"tomato"}}>Delete</p></div>
            </div> 
      <div style={{width:"60%", margin:"auto"}}>
      {  allpost.map(function(elem){
           return <PostCard props = {elem} />
        })}
      </div>
      </div>
  
    )
  }

export default Mytodos