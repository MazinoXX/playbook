const stories = {
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
console.log(stories.getUserAndPlace())
console.log("El numero de interacciones de mi storie es:" + stories.getNumberOfInteractions())
console.log(stories.getGeneralInfo())
