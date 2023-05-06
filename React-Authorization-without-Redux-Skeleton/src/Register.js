import React,{useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

function Register(props){
  
    const[name, setName] = useState('')
    const[password, setPassword] = useState('')
    const[message, setMessage] = useState('')
    const addUsername = (e)=>{
        setName(e.target.value)
    }
    const addPassword = (e)=>{
        setPassword(e.target.value)
    }
    const registerUser=(e)=>{
        e.preventDefault()
        const registerData={
            username: name,
            password: password
        }
        axios({
            method: 'post',
            url: 'http://localhost:3033/user/register',
            headers: {},
            data: registerData
    })
    .then(res=> setMessage(res.data))
    .catch(err=> setMessage(err.data))
    }
    return(
        <Container>
        <Card style={{ marginLeft: "32%",width: '30rem', height: '20rem'}}>
        <Card.Header as="h5" bg="dark">Register</Card.Header>
            <Card.Body>
                    <form onSubmit={(e)=>registerUser(e)}>
                        Name: <input style={{marginLeft: '5%'}} type="text" placeholder="Enter your name" value={name} onChange={(e)=>addUsername(e)}></input><br/> <br/>
                        Password: <input type="password" placeholder="Enter a password" value={password} onChange={(e)=>addPassword(e)}></input> <br/>{'    '}
                        <br/><Button variant="dark" type="submit">Register</Button>
                    </form>
            </Card.Body>
            {message}   
            </Card>
           </Container>
    )
}
export default Register
