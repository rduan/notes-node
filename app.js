
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const argv = yargs.argv;
const notes = require('./notes');

//var command = process.argv[2];
var command = argv._[0];

console.log(process.argv);
console.log('Command:', command);
console.log('Yargs',argv);

// if (command === 'add') {
//     //console.log('add')
//     notes.addNote(argv.title, argv.body);
// } else if (command === 'list') {
//     //console.log('list')
//     notes.getAll();
// }

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note) {
            console.log('success create note');
            console.log(`Title: ${note.title}`);
            console.log(`Body: ${note.body}`);
        } else {
            console.log('unsuccess');
        }
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.getNote(argv.title);
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    default:
        break;
    
}