export default class Github{
    issue = {
        title: "'Duda con ejercicio 5'",
        repo_associated: "playbook",
        status: "open",
        numberOfCommits: 100,
        labels: 4,
        author: "Lorhe Comhne",
        date_created: "10/03/2021",
        last_update: "14/04/2021",
        getTitleAndAuthor: function(){
            return console.log(`This is the title of the issue ${this.title} and was created by ${this.author}`)
    
        },
        getGeneralInfo: function(){
            return `This issue was created on ${this.date_created} and the las update was on ${this.last_update}`
        }
    }
    pull = {
        title: "'Mejora en codigo main'",
        branch_name: "Master",
        date_created: "10/03/2021",
        author: "Lorhe Comhne",
        status: "Checking",
        repo_associated: "Playbook",
        getTitleAndAuthor: function(){
            return console.log(`This is the title of the issue ${this.title} and was created by ${this.author}`)
    
        },
        getStatus: function(){
            return `This is the status for the pull-request [${this.status}] `
        }
    }
    repo = {
        name: "LaunchX",
        author: "John Constantine",
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
}