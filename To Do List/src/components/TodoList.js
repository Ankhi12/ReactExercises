import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TodoList = ()=>{
    const[listdata, setListData] = useState([])
    const[inputdata, setInputData] = useState('')
    const[emptyMsg, setEmptyMsg] = useState('')
    const[completedTasks, setCompletedTasks] = useState([])
    
    const submitData = (e)=>{
        setEmptyMsg('')
        e.preventDefault()
        if(inputdata){
            setListData([...listdata, inputdata])
        }
        else{
            setEmptyMsg('Enter a task!')
        }
        setInputData('')
    }
    const inputValue = (e)=>{
        setInputData(e.target.value)
    }

    const checkBoxcheck = (eve)=>{
        const data = [...listdata]
        const index = data.indexOf(eve)
        const val = data.splice(index, 1)
        setCompletedTasks([...completedTasks,val])
        setListData(data)
    }
    return(
        <div>
            <Container style={{paddingTop: "5%"}}>
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                    <h1> TO DO List</h1>
                    <form onSubmit={(e)=>submitData(e)}>
                        <input type='text' value={inputdata} placeholder='Enter a task' onChange={(e)=>{
                            inputValue(e)
                        }}></input><br/><br/>
                        <Button type="submit" variant="primary">Submit</Button>
                    </form>
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2">
                    {emptyMsg && <h6 style={{color: 'red'}}>{emptyMsg}</h6>}
                    {listdata.length!==0 &&
                    <div>
                        <h2> To do Items</h2>
                        <ul>
                         {
                             listdata.map((e,i)=>{
                            return <li key={i} style={{listStyle: "none"}}><input type="checkbox"  onChange={()=>{checkBoxcheck(e)}}/>{e} </li>
                         })
                        }
                        </ul>
                    </div>}
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col xs lg="15">
                {completedTasks.length!==0 &&
                <div style={{marginLeft: "65%", marginTop:"8%"}}>
                <h3>Completed Tasks</h3>
                <ul>
                    {
                        completedTasks.map((e,i)=>{
                            return <li key={i}>{e}</li>
                        })
                    }
                </ul>
                </div>}
                </Col>
                </Row>
            </Container>
        </div>
    )

}
export default TodoList
