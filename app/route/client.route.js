const Clientuser = require("../utils/users");
const {create,getAllUser,getCurrentUser,Update,Delete} = require("../utils/users");
var id = 1

module.exports = app =>{
    // Create a new Customer
    app.post("/users", (req,res)=>{
        
       
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var gender = req.body.gender;
        var date_of_birth = req.body.date_of_birth;
        
        var user = create(id++,firstname,lastname,gender,date_of_birth)
        
        res.status(200).send({
            message:"Saved"
        })

    });
  
    // Retrieve all Customers
    app.get("/users", (req,res)=>{
        const getUsers = getAllUser();
        res.send(getUsers);
    });
  
    // Retrieve a single Customer with customerId
    app.get("/users/:customerId", (req,res)=>{
        var idv = req.params.customerId;

        const getCurrent = getCurrentUser(idv)
        res.send(getCurrent)
    });
  
    // Update a Customer with customerId
    app.put("/users/:customerId", (req,res)=>{
        var idv = req.params.customerId;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var gender = req.body.gender;
        var date_of_birth = req.body.date_of_birth;
        
        var update = Update(idv,{firstname,lastname,gender,date_of_birth})
        res.status(200).send({
            message:"Updated"
        })

    });



  
    // Delete a Customer with customerId
    app.delete("/users/:customerId", (req,res)=>{
        var idv = req.params.customerId;
        var deleteUser = Delete(idv);
        res.status(200).send({
            message:"Deleted"
        })
    });
  
    // // Create a new Customer
    // app.delete("/users", customers.deleteAll);
}