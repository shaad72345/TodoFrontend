import React from 'react'
import { Link } from 'react-router-dom'
function PostCard({props}) {
  return (
    <div>
      
         <div style={{display:"flex", justifyContent:"space-between"}}> 
        <div><h2>{props.taskname}</h2></div>
        <div><p>{props.status}</p></div>
        <div><p>{props.tag}</p></div>
        <div><Link to ={`/delete/${props._id}`}><button style={{color:"black"}} >Delete</button> </Link></div>
     
        </div>
        <br />
        <hr style={{borderColor:"tomato"}}/>
    </div>
  )
}

export default PostCard