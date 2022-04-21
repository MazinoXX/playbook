import Facebook from "./facebook.js";
import Github from "./github.js";
import CrunchyRoll from "./crunchyroll.js";


const facebook = new Facebook()

console.log(facebook.post.getGeneralInfo())
console.log(facebook.post.getNumberOfInteractions())


const github = new Github()

console.log(github.repo.getTotalIssues())
console.log(github.repo.getGeneralInfo())


const crunchyroll = new CrunchyRoll()

console.log(crunchyroll.Biography.getGeneralInfo())
console.log(crunchyroll.Biography.getTotalOfAnimes())




