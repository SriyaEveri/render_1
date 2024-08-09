import express from 'express';
import sqlitedb from './model/index.js';

const app = express();

app.use(express.json());
app.get('/loan',async(req,res)=>{
    console.log(req.path);
    try{
        const loan = await sqlitedb.Loan.findAll(); 
        res.status(200).json({sucess : true,data:loan});

    }catch(error){
        res.status(500).json({error: error.message});
    }
})

app.listen(8000,()=>{
    console.log("server started");
});
