class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const client = new Teacher("ronak", "ronak@teacher.com", "123")
client.addCourse()
client.logMe()

const frd = new User("friend")
// frd.addCourse() //error..doesn't have the excess.
frd.logMe()

console.log(client === frd);
console.log(client === User);
console.log(client === Teacher);
// not exactly the same,it is the instance.
console.log(client instanceof User);
console.log(client instanceof Teacher);