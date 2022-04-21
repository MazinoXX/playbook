export default class CrunchyRoll{
    Biography = {
        name: "Alex Lora",
        total_animes: 50,
        Favarites_genders: [
            "Shonen",
            "Romance",
            "Horror"
        ],
        hours_watchet: 1400,
        check_list: {
            watched: 2,
            planing: 4,
            watching: 100,
            dropped: 34
        },
        creator: "Lorhe Comhne",
        getTotalOfAnimes: function(){
            return this.check_list.watched + this.check_list.planing + this.check_list.watching + this.check_list.dropped
    
        },
        getGeneralInfo: function(){
            return `This is the biography of ${this.name} and the favorites gender are  ${this.Favarites_genders}`
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