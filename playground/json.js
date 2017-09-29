const fs = require('fs');

var originalNote = {
    title: 'note title',
    body: 'note body'
};

var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteStr);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);