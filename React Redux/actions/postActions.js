import axios from 'axios'
import { POSTSDATA,ERRORDATA } from '../types'

export const getPosts = ()=>async dispatch=>{
    try{
        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch(setPosts(posts))
    }
    catch(e){
        dispatch({
            type: ERRORDATA,
            payload: console.log(e)
        })
    }
}
export const setPosts=(posts)=>{
    return{
        type: 'POSTSDATA',
        payload: posts
    }
}
