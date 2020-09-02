const users = [];
function create(id,username,room){
    const user = {id,username,room};

    users.push(user);

    return user;
    
}