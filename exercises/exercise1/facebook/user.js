const user = {
    name: "Juan Roldan",
    password: "1234",
    contry: "Mexico",
    email: "juan12@gmail.com",
    birth: "10/03/2021",
    celphone: "342155600",
    age: 23,
    date_creat: "12/05/2012",
    getNameAndPassword: function(){
        return `User:${this.name} Password:${this.password}`

    },
    getGeneralInfo: function(){
        return `This is the acount of ${this.name} and was created on ${this.date_creat}`
    }
}
console.log(user.getNameAndPassword())
console.log(user.getGeneralInfo())