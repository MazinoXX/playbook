export default class Facebook{
    post = {
        title: "'Mi primer post'",
        place: "CDMX",
        hastags: [
            "First post",
            "Alive",
            "On the road"
        ],
        date_posted: "10/03/2021",
        interactions: {
            likes: 2,
            shares: 4,
            coments: 100
        },
        author: "Lorhe Comhne",
        getNumberOfInteractions: function(){
            return this.interactions.likes + this.interactions.shares + this.interactions.coments
    
        },
        getGeneralInfo: function(){
            return `This is my post an was created on ${this.date_posted} and the author is ${this.author}`
        }
        
    }
    stories = {
        autor: "Juan Roldan",
        place: "Mira mar",
        contry: "Mexico",
        date_creat: "12/05/2012",
        interactions: {
            likes: 2,
            shares: 4,
            views: 100
        },
    
        getUserAndPlace: function(){
            return `User:${this.autor} Place:${this.place}`
    
        },
        getGeneralInfo: function(){
            return `This is the storie of ${this.autor} and was created on ${this.date_creat}`
        },
        getNumberOfInteractions: function(){
            return this.interactions.likes + this.interactions.shares + this.interactions.views
    
        }
    }
    user = {
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
   
    
}