import {getUsers,postUser} from './../../api/api'
import {postType} from '../type'


const fetchPosts = ()=>{
    return async (dispatch) =>{
  dispatch({type:postType.GET_POST_REQUEST})
  try{
    await getUsers().then(res=>dispatch({
        type:postType.GET_POST_SUCCESS,
        payload:res.data
    }))
  }
   catch(err){
    dispatch({
        type:postType.GET_POST_ERROR,
        payload:err.message
    })
   }  
 
      
}}



export {
  
    fetchPosts
}