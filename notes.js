const fs = require('fs')
const chalk = require('chalk')


const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added'))
    }
    else {
        console.log(chalk.red.inverse('Found Duplicate'))
    }
    

}
const readNote = (title) => {
    const notes = loadNotes()
    const val = notes.find((note)=> note.title === title)
    if(val) {
        console.log(val)
    }
    else{
        console.log(chalk.red.inverse('can not find note matching with the title ' + title))
    }
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Here are the notes: '))
    notes.forEach(note => {
        console.log(note)
    });
}
const removeNote = function(title) {
    const notes = loadNotes()
    const toKeep = notes.filter(function(note) {
        return title !== note.title
    })
    if(notes.length === toKeep.length) {
        console.log(chalk.red.inverse('Can\'t find note'))
    }
    else {
        console.log(chalk.green.inverse('Note removed'))
    }
    saveNotes(toKeep)
}
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
