import { useState } from "react"
import { useSelector } from "react-redux"

const QuoteEditComp = (props) =>{
    const[edit, setEdit] = useState(false)
    const[editedName, setEditedName] = useState('')
    const[editedBody, setEditedBody] = useState('')
    const[index, setIndex] = useState(0)
    const[changedData, setChangedData] = useState(false)
    const formData = useSelector(state=>{
        return state.quoteForm.formdata
    })
    const editQuote = (quote, i)=>{
        console.log('The Quote for editing is', quote)
        setEdit(true)
        setEditedName(quote.name)
        setEditedBody(quote.body)
        setIndex(i)
    }
    const editName = (e)=>{
        setEditedName(e.target.value)
    }
    const editBody = (e)=>{
        setEditedBody(e.target.value)
    }
    const submitData = (e)=>{
        e.preventDefault()
        setChangedData(true)
        const Obj = {name: editedName, body: editedBody}
        formData[index] = Obj
        setEditedName('')
        setEditedBody('')
        setEdit(false)
    }
    return(
        <div>
            <h2>Quote Lists</h2>
            <ul style={{listStyleType: 'none'}}>
                {changedData && formData.map((e,i)=>{
                    if(JSON.stringify(e)!== '{}'){
                        return <li onClick={()=>editQuote(e,i)}>{e.name}-{e.body}</li>
                    }
                })}
            </ul>
            <ul style={{listStyleType: 'none'}}>
                { changedData == false &&
                    formData.map((e,i)=>{
                        if(JSON.stringify(e)!== '{}'){
                            return <li onClick={()=>editQuote(e,i)}>{e.name}-{e.body}</li>
                        }
                    })
                }
            </ul>
            {edit &&
                <div>
                    <h6> Editing the Quote</h6>
                    <form onSubmit={(e)=>submitData(e)}>
                        <label style={{marginRight:"18%"}}>Name: </label><br/><br/>
                        <input type="text" value={editedName} onChange={(e)=>editName(e)}/> <br/>
                        <label style={{marginRight:"18%"}}> Body: </label> <br/><br/>
                        <textarea value={editedBody} onChange={(e)=>editBody(e)}/><br/>
                        <input style={{marginRight:"18%"}}type="submit"/>
                    </form>
                </div>}
        </div>
    )
}
export default QuoteEditComp
