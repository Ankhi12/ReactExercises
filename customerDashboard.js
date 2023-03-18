<!DOCTYPE html lang="en">
<html>
    <head>
        <title>
            Customer Dash Board
        </title>
        </head>
    <body>
        <div id = "root"></div>
        <script src="react.development.js"></script>
        <script src="react-dom.development.js"></script>
        <script src="babel.js"></script>
        <script src="customer-data.js"></script>

        <script type="text/babel">


        const roothandle = document.getElementById("root")
            
            const {useEffect, useState} = React
          
            function Summary(props){

                const custObj= new Set()
                let Customers = 0
                let Amount = 0
                let Orders = 0
                props.data.map(e=>{
                  
                    Amount += e.Amount
                    Orders += 1
                  
                    if(!custObj.has(e.Name)){
                        custObj.add(e.Name)
                        Customers +=1
                    }
                })

                
                return(
                    <div>
                        <h1> Customer Dashboard </h1>
                        <div style={{display: "flex", align: "center"}}>
                        <div style={{width: "120px", height: "100px", backgroundColor: "#D3D3D3", margin: "10px",display:"flex", flex: "0.1"}}>
                            <h3 style={{alignSelf: "flex-end", textAlign: "center", marginLeft: "20px"}}> {Orders} <br/>Orders </h3>
                        </div>

                        <div style={{width: "120px", height: "100px", backgroundColor: "#D3D3D3", margin: "10px",display:"flex", marginRight: "20px"}}>
                            <h3 style={{alignSelf: "flex-end", textAlign: "center", marginLeft: "10px"}}> {Amount} Amount </h3>
                        </div>

                        <div style={{width: "120px", height: "100px", backgroundColor: "#D3D3D3", margin: "10px",display:"flex", marginRight: "20px"}}>
                            <h3 style={{alignSelf: "flex-end", textAlign: "center", marginLeft: "15px"}}> {Customers} Customers </h3>
                        </div>
                        </div>   
                    </div>
                )
            }

            function OrderDistribution(props){
                const OrderObj = {}
                
                let countKeys1 = 0
                let countKeys2 = 0
                let countKeys3 = 0
                let countKeys4 = 0
                let countKeys5 = 0
             
                return(
                    <div>
                        
                        <h2> Order Distribution </h2>
                        <div style={{display: "flex"}}>
                        <div style={{width: "120px", height: "100px", margin: "10px",display:"flex", flex: "0.5"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{border: '1px solid'}}>No. Of Orders</th>
                                    <th style={{border: '1px solid'}}>Count Of Customers </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    props.data.forEach(e=>{

                                        if(e.Name in OrderObj){
                                            OrderObj[e.Name] +=1
                                        }
                                        else{
                                            OrderObj[e.Name] =1
                                        }
                                    })
                                }

                                {
                                    Object.keys(OrderObj).forEach(e=>{
                                     
                                        if(OrderObj[e] == 1){
                                            
                                            countKeys1 += 1
                                         
                                        }
                                        if(OrderObj[e] == 2){
                                            countKeys2 += 1
                                        }
                                        if(OrderObj[e] == 3){
                                            countKeys3 += 1
                                        }
                                        if(OrderObj[e] == 4){
                                            countKeys4 += 1
                                        }
                                        if(OrderObj[e] >=5){
                                            countKeys5 += 1
                                        }
                                        
                                        
                                    })
                                }
                                <tr>
                                    <td style={{border: '1px solid'}}> 1 </td>
                                    <td style={{border: '1px solid'}}> {countKeys1}</td>
                                </tr>
                                <tr>
                                    <td style={{border: '1px solid'}}> 2 </td>
                                    <td style={{border: '1px solid'}}> {countKeys2}</td>
                                </tr>
                                <tr>
                                    <td style={{border: '1px solid'}}> 3 </td>
                                    <td style={{border: '1px solid'}}> {countKeys3}</td>
                                </tr>
                                <tr>
                                    <td style={{border: '1px solid'}}> 4 </td>
                                    <td style={{border: '1px solid'}}> {countKeys4}</td>
                                </tr>
                                <tr>
                                    <td style={{border: '1px solid'}}> 5+ </td>
                                    <td style={{border: '1px solid'}}> {countKeys5}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                        <div style={{ backgroundColor: "#D3D3D3", margin: "10px",display:"flex", marginRight: "20px", height: "200px", width: "200px", borderRadius: "50%",   background: "conic-gradient(brown 0% 5.12%, black 5.12% 10.24%, blue 10.24% 16% , green 16% 25%, yellow 25% 46%)"}}>

                        </div>
                    </div>
                    </div>
                    
                )
            }

            function ShowDetails(props){
                const[popClose, setPopClose] = useState(false)
                let order = 0
                let amount = 0

                    props.data.forEach(e=>{
                        if(e.Name == props.searchTerm){
                            order +=1
                       
                            amount += e.Amount
                        }
                    })
             
         
                function close(){
                 
                    setPopClose(true)
                   const isBool = false
                   props.callShowDetails(props.searchTerm, isBool)
                }
                if(popClose == false){
                return(
                    
                    <div style={{position: "fixed", left: "0", top: "0", width: "100%", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                        <div style={{backgroundColor: "white", position: "relative", width: "50%", minHeight: "200px", border: "1px solid #999", borderRadius: "4px", margin: "20px auto", padding:"20px", overflow: "auto", textAlign: "center", topPadding:"60px"}}>
                       
                        <button style={{cursor:"pointer", border: "1px solid #999", borderRadius: "50%", position: "fixed", right:"calc(50%-90px)", top: "10px"}} onClick={close}> X </button>
                        <h2> User Name - {props.searchTerm}</h2>
                        <h3> Order Count - {order},      Total Amount - {amount}</h3>
                      
                        <table style={{marginLeft: "auto", marginRight: "auto"}}>
                            <thead>
                                <tr>
                                    <th style={{border: '1px solid'}}> ID</th>
                                    <th style={{border: '1px solid'}}> Date </th>
                                    <th style={{border: '1px solid'}}> Amount </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.data.map((ele,i)=>{

                                        if(ele.Name == props.searchTerm){
                                        return(
                                            <tr>
                                                <td style={{border: '1px solid'}}>{i}</td>
                                                <td style={{border: '1px solid'}}>{ele.Date} </td>
                                                <td style={{border: '1px solid'}}>{ele.Amount}</td>
                                            </tr>
                                        )

                                        }

                                    })
                                }
                            </tbody>
                        </table>
                        </div>
                     
                    </div>
                )
                }
                else{
               
                    return <Dashboard/>
                }
            }
            
            
            function Dashboard(props){

                const[dataDisplay, setDataDisplay] = useState([])
                const [phone, setPhone] = useState()
                const [name, setName] = useState()
                const[clickedName, setClickedName] = useState()
                const[id, setId] = useState()
                const[blurred, setBlurred] = useState(false)
                const[isShowDetailCalled, setIsShowDetailCalled] = useState(false)
               
                const set = new Set()
                
                
                const displayUsers = (e)=>{
              
                    if(e.target.value){

                        data.forEach((ele,i)=>{
                            
                            if(ele.Phone.toString() == e.target.value && ele.Phone.toString().length <=10){
                         

                                setBlurred(true)
                                setPhone(ele.Phone)
                                setName(ele.Name)
                                setId(i)
                            }
                            else if(ele.Name.toLowerCase().indexOf(e.target.value) >-1){
                             
                                setBlurred(true)
                                setName(ele.Name)
                                setPhone(ele.Phone)
                                setId(i)
                            }
                        })

                       
                    }
                    else{
                        setBlurred(false)
                    }
                }

                const callShowDetails = (passedValue, isShowDetailCalled = true)=>{
                 
                    setIsShowDetailCalled(isShowDetailCalled)
                    setClickedName(passedValue)
                    
                }
                
                const printPDF = ()=>{
                    window.print()
                }

                return(
                    
                    <div>
                        <Summary data={data}/>
                        {isShowDetailCalled == true ?<div> <ShowDetails searchTerm={clickedName} data={data} callShowDetails={callShowDetails}/> 
                        
                        
                    
                        <h2> Listing Customers </h2>   
                        <input  type="text" name="search" placeholder="Search"  onKeyUp={displayUsers}/><button style={{marginLeft: "1300px"}} onClick={printPDF}> Download/Save as PDF </button> <br/><br/>

                        {blurred === true?
                        <table>
                            <thead>
                                <tr>
                                    <th style={{border: '1px solid'}}> Id </th>
                                    <th style={{border: '1px solid'}}> Name </th>
                                    <th style={{border: '1px solid'}}> Mobile </th>
                                    <th style={{border: '1px solid'}}> Details </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{border: '1px solid'}}> {id} </td>
                                    
                                    <td style={{border: '1px solid'}}> {name} </td>
                                    <td style={{border: '1px solid'}}> {phone} </td>
                                    <td style={{border: '1px solid'}}> <button style={{border: "none", background: "none", textDecoration: "underline", textDecorationColor: "blue"}} onClick = {()=>{callShowDetails(name,isShowDetailCalled)}}> Show </button></td>

                                </tr>
                            </tbody>
                        </table>
                    :
                       <table style={{border: '1px solid', width: '100%'}}>
                           <thead>
                                <tr style={{border: '1px'}}>
                                    <th style={{border: '1px solid'}}> Id </th>
                                    <th style={{border: '1px solid'}}> Name </th>
                                    <th style={{border: '1px solid'}}> Mobile </th>
                                    <th style={{border: '1px solid'}}> Details </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    
                                    data.map((e,i)=>{    

                                        if(set.has((e.Phone))){
                                         
                                        }
                                        else{
                                            set.add((e.Phone))
                                           
                                              return(                                                
                                                <tr key={i}>
                                                       <td style={{border: '1px solid'}}> {i} </td>
                                                        <td style={{border: '1px solid'}}> {e.Name}</td>
                                                        <td style={{border: '1px solid'}}> {e.Phone}</td>
                                                        <td style={{border: '1px solid'}}> <button style={{border: "none", background: "None", textDecoration: "underline", textDecorationColor: "blue"}} onClick = {()=>{callShowDetails(e.Name,isShowDetailCalled)}}>  Show </button></td>
                                                </tr>  
                                                
                                        )
                                        }
                                    })

                                }
                            </tbody>
                        </table>
                    }
                   </div>
                        
                        :
                        <div>
                           
                        <h2> Listing Customers </h2> 
                        
                        <input  type="text" name="search" placeholder="Search"  onKeyUp={displayUsers}/><button style={{marginLeft: "1300px"}} onClick={printPDF}> Download/Save as PDF </button> <br/><br/>
                        

                        {blurred === true?
                        <table>
                            <thead>
                                <tr>
                                    <th style={{border: '1px solid'}}> Id </th>
                                    <th style={{border: '1px solid'}}> Name </th>
                                    <th style={{border: '1px solid'}}> Mobile </th>
                                    <th style={{border: '1px solid'}}> Details </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{border: '1px solid'}}> {id} </td>
                                    
                                    <td style={{border: '1px solid'}}> {name} </td>
                                    <td style={{border: '1px solid'}}> {phone} </td>
                                    <td style={{border: '1px solid'}}> <button style={{border: "none", background: "none", textDecoration: "underline", textDecorationColor: "blue"}} onClick = {()=>{callShowDetails(name)}}> Show </button></td>

                                </tr>
                            </tbody>
                        </table>
                    :
                       <table style={{border: '1px solid', width: '100%'}}>
                           <thead>
                                <tr style={{border: '1px'}}>
                                    <th style={{border: '1px solid'}}> Id </th>
                                    <th style={{border: '1px solid'}}> Name </th>
                                    <th style={{border: '1px solid'}}> Mobile </th>
                                    <th style={{border: '1px solid'}}> Details </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    
                                    data.map((e,i)=>{    

                                        if(!set.has((e.Phone))){
                                            set.add((e.Phone))
                                           
                                              return(                                                
                                                <tr key={i}>
                                                       <td style={{border: '1px solid'}}> {i} </td>
                                                        <td style={{border: '1px solid'}}> {e.Name}</td>
                                                        <td style={{border: '1px solid'}}> {e.Phone}</td>
                                                        <td style={{border: '1px solid'}}> <button style={{border: "none", background: "None", textDecoration: "underline", textDecorationColor: "blue"}} onClick = {()=>{callShowDetails(e.Name)}}>  Show </button></td>
                                                </tr>  
                                        )
                                        }
                                    })

                                }
                            </tbody>
                        </table>
                    }
                   </div>
                    }
                      
                    <OrderDistribution data={data}/>
                   
                    </div>
                )

            }
           
            ReactDOM.render(<Dashboard/>,roothandle)
        </script>
    </body>
</html>
