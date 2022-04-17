const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo: " + repo.name)
   console.log("Lenguaje usado: " + repo.language)
   console.log("Estrellas obtenidas " + repo.stars)
   console.log("Numero de forks " + repo.forks)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log("Numero de commits " + repo.numberOfCommits)
   console.log(repo.getGeneralInfo())
   
   