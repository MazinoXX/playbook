const issue = {
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
issue.getTitleAndAuthor()
console.log(issue.getGeneralInfo)