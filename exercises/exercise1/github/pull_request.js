const pull = {
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
pull.getTitleAndAuthor()
console.log(pull.getStatus())