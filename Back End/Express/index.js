const express=require('express');
const cors=require('cors');

const app=express();
const BodyParser=require('body-parser');
const Routes=require('./Routes');

app.use(BodyParser.json());
app.use(cors());
app.use('/',Routes);

app.listen(3001,'localhost',function(err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Backend server running in port 3001');
});