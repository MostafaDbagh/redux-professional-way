import React, { useEffect, useState } from 'react';
import {fetchPosts} from '../redux/actions/actions'
import {useDispatch,useSelector} from 'react-redux'
const Show = () => {
    const State  = useSelector(c=>c);
    const dispatch = useDispatch();
    let [obj,setObj] = useState([])
    const handleClcik = ()=>{
      dispatch(fetchPosts())
    }
    return (
        <>
       
        {State['Posts']['data']  && State['Posts']['loading']==false ?
       State['Posts']['data']['result'].map(i=><li key={Math.random()}>{i.post}</li>):
        <h1>Loading....</h1>  
          } 
    {console.log(obj)}
   
      <button onClick={handleClcik}>fetchPosts</button>
      
        

        </>
      );
}
 
export default Show;