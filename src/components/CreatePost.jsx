import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { myContext } from '../CustomProviderComp';
function CreatePost() {
  const titlebox = useRef();
  const {isLogin} = useContext(myContext);
  const [post, setPost] = useState({taskname:"", status:"",tag:""})
  const [uploadMsg, setUploadMsg] = useState("");
  const [Post_Image, setImage] = useState("")
 const handleUpload = ()=>{
  const {taskname,status,tag} = post;
 // console.log(Post_Image);
const payload = {taskname,status, tag}
  fetch("https://lonely-purse-colt.cyclic.app/todo/create", {
    method:"POST",
    headers : {
      'Content-Type':'application/json',
      'Authorization' : `Bearer ${isLogin}`
   },
    body : JSON.stringify(payload)
  }).then((res)=>res.json())
  .then((res)=>{setUploadMsg(res.msg); titlebox ="" })
  .catch((err)=>console.log(err))

 }
 const convertToBase64 = (e)=>{
//console.log(e);
var reader = new FileReader();
reader.readAsDataURL(e.target.files[0]);
reader.onload =() =>{
 // console.log(reader.result)
  setImage(reader.result);
  console.log(Post_Image);
  
}
 }

  return (
    <div>
         <h2 > Create Your Todo </h2>
         {uploadMsg ?  <div><h2 style={{color:"darkgreen"}} >{uploadMsg}</h2></div> : 
       <div style={{background:"white",color:"black", width:"400px", height:"420px", margin:"auto",textAlign:"left", paddingLeft:"10px"}}>
      <br />
      TaskName:
      <input type="text" placeholder='Enter Title . . .' ref = {titlebox} style={{width:"90%",padding:"7px", color:"black"}} onChange={(e)=>{setPost({...post,taskname:e.target.value})}}/> <br />
      Status <br />
      {/* <textarea name="" id="" cols="49" rows="5" placeholder='Enter description...' style={{color:"black"}} onChange={(e)=>{setPost({...post,description:e.target.value})}} ></textarea> <br /> */}
      <select style={{width:"90%",padding:"7px", color:"black"}} name="Select Status" onChange={(e)=>{setPost({...post,status:e.target.value})}}>
  <option style={{color:"black"}} value="select startus">Select Status</option>
  <option style={{color:"black"}} value="pending">Pending</option>
  <option style={{color:"black"}} value="done">Done</option>
</select>

<p style={{color:"black"}}>Tag : </p> &nbsp;

<select style={{width:"90%",padding:"7px",color:"black"}} name="Select Tag" onChange={(e)=>{setPost({...post,tag:e.target.value})}}>
  <option style={{color:"black"}} value="select tag">Select Tag</option>
  <option style={{color:"black"}} value="family">Family</option>
  <option style={{color:"black"}} value="personal">Personal</option>
  <option style={{color:"black"}} value="official">Official</option>
</select>
     <div style={{display:"flex", padding:"20px"}}> 
      <div>
  
    
     <br /> <br />
     
     </div>
     <div>
     <button style={{padding:"8px 20px",color:"black"}} onClick={handleUpload}>Upload </button>
     </div>
     </div>
     </div>
   }
    </div>
  )
}

export default CreatePost