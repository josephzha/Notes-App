const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')


//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function() {
        notes.listNotes()
    }
})
yargs.parse()
//console.log(yargs.argv)

