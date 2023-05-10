import React, { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import QuoteEditComp from './QuoteEditComp'
import {FormData} from '../action/QuoteFormAction'

const QuoteFormComp = (props)=>{
    const dispatch = useDispatch()
    const[name, setName] = useState('')
    const[body, setBody] = useState('')
    const[click, setClick] = useState(false)
    const[errorNameMsg, setErrorNameMsg] = useState('')
    const[errorBodyMsg, setErrorBodyMsg] = useState('')
    const[data, setData] = useState({})

    const formData = (e)=>{
        e.preventDefault()
        if(name === ""){
            setErrorNameMsg('Enter the author name')
        }
        else if(body === ""){
            setErrorBodyMsg('Enter the quote in the body section.')
        }
        else if(name && body){
            setClick(true)
            setData({...data, name:name, body:body})
            setName('')
            setBody('')
            setErrorBodyMsg('')
            setErrorNameMsg('')
        }
    }
    const updateBody = (e)=>{
        setBody(e.target.value)
    }
    const updateName=(e)=>{   
        setName(e.target.value)
    }
    useEffect(()=>{
        dispatch(FormData(data))
    },[data])
    return(
        <div>
            <h1>Quote Managemnt</h1>
            <form onSubmit={(e)=>formData(e)}>
                <label style={{marginRight:"18%"}}>Name: </label> <br/>
                <input type="text" value={name} onChange={(e)=>updateName(e)}></input><br/><br/>
                <label style={{marginRight:"18%"}}> Body:</label><br/><br/>
                <textarea value={body} onChange={(e)=>updateBody(e)}></textarea><br/><br/>
                <input style={{marginRight:"18%"}}type="submit"/>
            </form>
            {errorBodyMsg && <h6 style={{color:"red"}}>{errorBodyMsg}</h6>}
            {errorNameMsg && <h6 style={{color:"red"}}>{errorNameMsg}</h6>}
            {click && <QuoteEditComp/>}
        </div>
    )
}
export default QuoteFormComp
