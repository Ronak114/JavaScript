function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) // call he nhi hua.
    SetUsername.call(this.username) // c.call --> to call reference
   
    this.email = email
    this.password = password
}

const Name = new createUser("ronak", "ronak@fb.com", "123")
console.log(Name);