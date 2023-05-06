import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../actions/userActions'
import { useHistory } from "react-router-dom";
import PostUserComponent from './PostUserComponent'

function UsersComponent(props){
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector((state)=>{
        console.log('state user user', state.users.users.data)
        return state.users.users.data
    })
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    const showPosts = (id, name)=>{
        history.push('/userPosts', {userId: id, userName: name})  
    }
    
    return(
        <div>
            <h1>User Lists - {users.length}</h1>
            <h2>Names</h2>
            <ul>
                {
                    users.map(e=>{
                        return <li key={e.id} onClick={()=>showPosts(e.id, e.name)}>{e.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default UsersComponent
