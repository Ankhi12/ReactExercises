import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Home = (props)=>{
  
    const [status, setStatus] = useState('')
    const history = useHistory()
    useEffect(()=>{
        axios.get('http://localhost:3033/user/validateToken', {
            headers:{
                token: props.location.state.token
            }
        }).then(res=> {
                setStatus(res.data)
            })
            .catch(err=> console.log('Error is', err))
    }, [])
    const logoutApp = ()=>{
        localStorage.removeItem('token')
        history.push('/login')
    }
    return(
        <div>
            <Button variant="dark" style={{marginLeft: "65%"}} onClick={logoutApp}>Logout</Button>
            <h5 style={{marginLeft: "35%", paddingTop: "0%", color: '#235347'}}>{status}</h5>  
        </div>
    )

}

export default Home
