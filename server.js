const app = require("express")();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const Port = 3001 || process.env.Port;

const basicAuth = require('express-basic-auth')
 
app.use(basicAuth({
    users: { 'test': 'pass1234' }
}))

app.use(bodyParser.json());
app.listen(Port,()=>{
    console.log(`Server running on Port ${Port}`)
});

require("./app/route/client.route.js")(app);


app.get("/",(req,res)=>{
    res.json({message:"welcome"});
})


