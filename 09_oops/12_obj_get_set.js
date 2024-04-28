// syntax is not used.
const User = {
    _email: 'abc@gmail.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const ronak = Object.create(User) //factory funtn
console.log(ronak.email);