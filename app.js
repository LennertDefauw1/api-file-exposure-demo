
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.listen(PORT, '0.0.0.0', (error) =>{
        if(!error)
            console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);


app.get('/', (req, res)=>{
    res.status(200);

    res.sendFile(path.join(__dirname,'test.wav'));
});
