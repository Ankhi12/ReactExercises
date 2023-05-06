import axios from 'axios'
import { USERSDATA,ERRORDATA } from '../types'

export const getUsers = ()=>async dispatch=>{
    try{
        const users = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch(setUsers(users))
    }
    catch(e){
        dispatch({
            type: ERRORDATA,
            payload: console.log(e)
        })
    }
}
export const setUsers=(users)=>{
    return{
        type: 'USERSDATA',
        payload: users
    }
}
