class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello () {
            console.log(`Mi ${this.name} te saluda!!!`)
    }
    sayMessage (mensaje) {
        console.log(`Mi ${this.name} dice: ${mensaje}`)
    }
  }
  module.exports = Pokemon