import { getPosts } from "../actions/postActions"
import { POSTSDATA, ERRORDATA} from "../types"
const initialState = {
    posts: []
}
const PostsReducer = (state = initialState, action) =>{
    switch(action.type){
        case POSTSDATA: {
            return{
                ...state,
                posts: action.payload
            }
        }
        case ERRORDATA:{
            return `Error occured ${action.payload}`
        }
        default: return state
    }
    return state
}

export default PostsReducer
