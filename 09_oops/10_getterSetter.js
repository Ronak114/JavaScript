class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //getter
    get email(){
        return this._email.toUpperCase()
    }
    //setter
    set email(value){
        this._email = value
    }

    //getter
    get password(){
        return `${this._password}pawar`
    }
    //setter
    set password(value){
        this._password = value
    }
     // store kr rahe abc return kiya abcpawar
}

const ronak = new User("ronak@gmail.com", "abc")
console.log(ronak.password);
console.log(ronak.email);