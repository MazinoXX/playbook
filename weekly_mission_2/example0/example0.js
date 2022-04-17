console.log("Creando distintos objetos en JS");

//Ejemplo de un objeto vacio

const myObjetc = {} //Esto es un objeto vacio
console.log("Ejemplo 1: Creando un objeto vacio");
console.log(myObjetc);

//Ejemplo de un objeto con propiedades

const myObjetc2 = {
    name: "Alex",
    age: 25
}
console.log("Ejemplo 2: Creando un objeto con propiedades");
console.log(myObjetc2);

//Ejemplo de un objeto con distintas propiedades

const myObjetc3 ={
    name: "Charpei",
  age: 13,
  nicknames: [
   "Negrito",
    "Char-pei",
    "Perroski"
  ],
  address: {
    zip_code: "44556",
    street: "Villa de las Flores",
    city: "Edomex"
  }
}
console.log("Ejemplo 3: Objeto con distintas propiedades");
console.log(myObjetc3);
console.log(myObjetc3.age);
console.log(myObjetc3["address"]);
console.log(myObjetc3.nicknames[0]);

//Ejemplo de un objeto con metodos

const human = {
    name: "John",
    //Esta es una función que se guarda como propiedad
    sayHello: function(){
        // this. hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en su idioma`);
    }
}

console.log("Ejemplo 4: Objeto con un metodo");
human.sayHello();


//Ejemplo con un método que recibe parametros

const myHuman = {
    name: "Charls",
    sayHelloToMyHuman: function(yourHuman){
        console.log(`${this.name} say's Hello to ${yourHuman}`);
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parametro");
myHuman.sayHelloToMyHuman("Jonh");
