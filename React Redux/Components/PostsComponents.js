import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/postActions'

function PostsComponents(props){
    const dispatch = useDispatch()
    const posts = useSelector((state)=>{
        return state.posts.posts
    })
    useEffect(()=>{
        dispatch(getPosts())
    },[])
    return(
        <div>
            <h1>Posts Lists - {posts.length}</h1>
            <h2>Names - {props.location.state.userName}</h2>
            <ul>
                {
                    posts.map((e,i)=>{
                        return <li key={i}>{e.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default PostsComponents
