const moment = require('moment');
const users = [];
function create(id,firstname,lastname,gender,dateofbirth){
    
    const user = {id,firstname,lastname,gender,dateofbirth,datecreated:moment().format('LLLL'),dateupdated:moment().format('LLLL')};
    
    users.push(user);
    

    return users;
    
}

function getAllUser(){
    return  users;


}

function getCurrentUser(id){
    return  users.find(user => user.id ==id);


}

function Update(id,{firstname,lastname,gender,dateofbirth}){
    var old = users.find(user => user.id == id)
    old.firstname = firstname;
    old.lastname = lastname;
    old.gender = gender;
    old.dateofbirth = dateofbirth;
}

function Delete(id){
    const index = users.findIndex(user => user.id == id);
    if (index !== -1){
        return users.splice(index,1)[0];
        
    }
    
}


module.exports = {create,getAllUser,getCurrentUser,Update,Delete};