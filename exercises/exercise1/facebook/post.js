const post = {
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
console.log("El numero de interacciones de mi post es:" + post.getNumberOfInteractions())
console.log(post.getGeneralInfo())
console.log("Estos son los hastags usados en el post:" + post.hastags)