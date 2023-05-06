import { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Home from "./Home";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Login(props){
  
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[msgFlag, setMsgFlag] = useState(false)
    const[authMsg, setAuthMsg] = useState('')
    let history = useHistory()
    const usernameEntry=(e)=>{
        setUsername(e.target.value)
    }
    const passwordEntry=(e)=>{
        setPassword(e.target.value)
    }
    const submitData = (e)=>{
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:3033/user/generateToken',
            headers: {}, 
            data: {
              username: username,
              password: password 
            }
          })
          .then(res=>{
            if(res.data!="Sorry authentication failed. Try again!"){
                localStorage.setItem('token', res.data)
                history.push(`/Home`, {token: res.data})
                console.log('The history is', history)
            }
            else{
                setMsgFlag(true)
                setAuthMsg(res.data)
            }
          })
          .catch(err=> console.log('The error is', err))
    }
    return(
        <Container>
        <Card style={{ marginLeft: "32%", width: '30rem', height: '20rem'}}>
        <Card.Header as="h5" bg="dark">Login</Card.Header>
            <Card.Body>
                    <form onSubmit={(e)=>submitData(e)}>
                        Name: <input style={{marginLeft: '5%'}} type="text" value={username} onChange={(e)=>usernameEntry(e)}></input><br/> <br/>
                        Password: <input type="password" value={password} onChange={(e)=>passwordEntry(e)}></input> <br/>{'    '}
                        <br/><Button variant="dark" type="submit">Submit</Button>
                    </form>
            </Card.Body>
            {msgFlag==true && <h6 style={{color:"red"}}>{authMsg}</h6>}
            </Card>
        </Container>
    )

}
export default Login
