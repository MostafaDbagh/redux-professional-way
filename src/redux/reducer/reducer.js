import {postType} from '../type'

let initialState = {
    data:null,
    loading:false,
    error:null

};

const postReducer = (state=initialState,action)=>{
    switch (action.type)
    {
        case postType.GET_POST_REQUEST:
            return{...state,data:null,loading:true,error:null};
        case postType.GET_POST_SUCCESS:
            return{...state,data:action.payload,loading:false,error:null};
        case postType.GET_POST_ERROR:
            return{...state,data:null,loading:false,error:action.payload};
        default: 
            return state
            
    }
}


export default postReducer

