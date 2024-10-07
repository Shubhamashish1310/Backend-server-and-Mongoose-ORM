import express from 'express';
import connectdb from './dbconfig.js';

const PORT = 3100;

const app = express();

app.get('/shubham',(res,req)=>
    req.send('shubhamashish')
)
app.get('/king',(res,req)=>{
    return req.json({'shubham':2,'ashish':4})
})
app.get('/',(res,req)=>{
    return req.send("i will never do it again nice shubham")
})

app.listen(PORT,()=>{
    console.log("shubham ashish ",` ${PORT}`)
    connectdb();
})

