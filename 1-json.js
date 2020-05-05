const fs = require('fs')
// const book = {
//     title: 'ego is bad',
//     author: 'ryan holiday'
// }
// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)
// const parsedata = JSON.parse(bookJSON)
// console.log(parsedata.author)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const data = JSON.parse(dataBuffer.toString())
// console.log(data.author)
const buffer = fs.readFileSync('1-json.json')
const personJSON = buffer.toString()
const person = JSON.parse(personJSON)
person.age = 23
person.name = 'Joseph'
const myJSON = JSON.stringify(person)
console.log(myJSON)
fs.writeFileSync('1-json.json',myJSON)
