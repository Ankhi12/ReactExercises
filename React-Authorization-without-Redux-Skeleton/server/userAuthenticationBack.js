const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

let PORT = process.env.PORT || 3033;

 mongoose.connect('mongodb://127.0.0.1:27017/userAuth')
         .then(db=> console.log('conneted to DB'))
         .catch(err=> console.log('Something went wrong!', err))

const {Schema} = mongoose
const authSchema = new Schema(
    {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    }
)

const Auth = mongoose.model('Auth', authSchema)

app.post("/user/generateToken", (req, res) => {
    const {username, password} = req.body
    try{
    const response = Auth.find({username: username, password: password}).exec()
            response.then(result=>
                {
                    let jwtSecretKey = '';// you can write a custom secret key here
                    let data = {
                        time: Date() // you can write a custom logic here, instead of the 'time' key.
                }
                 const token = jwt.sign(data, jwtSecretKey);
                 res.send(token);
                } )
                .catch(e=> res.send('Sorry authentication failed. Try again!'))
    }
    catch(e){
        res.send('Fatal error has occured')
    }
});
  
app.get("/user/validateToken", (req, res) => {
    let jwtSecretKey = ''// write your own secret key here, should have the same value as that of line 37
    try {
        const token = req.headers.token;
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
});

app.post("/user/register", (req, res)=>{
    const{body} = req
    const {username, password} = body
    console.log('The body for register is', body)
    
        if(body=={}){
            res.send('Username and password fields are empty!')
        }
        else if(username==""){
            res.send('Username is empty!')
        }
        else if(password==""){
            res.send('Password is empty!')
        }
        else{
            try{
                const findVal = Auth.find({username: username}).exec()
                findVal.then((response)=> {
                                if(response.length!=0){
                                    res.send('User already exists!')
                                }
                                else{
                                    const userAuth = new Auth(body)
                                    userAuth.save()
                                    res.send('Successfully Registered!')  
                                }
                               
                             })
                        .catch(()=>{
                            res.send(`Can't register due to some internal error!`)                    
                        })
               
            }
            catch(e){   
                res.send('Failed to register!')
            }
    }
})

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
  });
