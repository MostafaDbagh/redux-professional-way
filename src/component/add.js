import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {fetchPosts} from '../redux/actions/actions'
const AddUser  = () => {
    const State  = useSelector(c=>c);
    const dispatch = useDispatch();

    const [apost,setAPost]= useState({
        title:'',
        post:''
     
      })
      const handleChange = (e)=>{
        const val =e.target.value
        setAPost({
          ...apost,
     [e.target.name]:val
        })
      }
      const sendPost = ()=>{
        dispatch(fetchPosts(apost))
    
      }
    return ( 
        <>
      
        <input type='text' name="post" onChange={(e)=>handleChange(e)}/> 
        <input type='text' name="title"  onChange={(e)=>handleChange(e)}/> 
        <button onClick={()=>sendPost()}>send Post</button>
        </>
     );
}
 

export default AddUser ;