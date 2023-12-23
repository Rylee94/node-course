// const xyz = require("./people");
// import multiple different things from a different files with destructuring

// extracting people from people.js
// has to be same name as property you want access too
const { people, ages } = require("./people");

//require statement returns an empty object {}
// xyz.people and xyz.ages gives access to each object. also makes two seperate objects versus one big one
console.log(people, ages);
// people is imported (required) from people.js but is not accessible in another file
// console.log(people);

const os = require("os");
console.log(os.platform(), os.homedir());
