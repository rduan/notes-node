
console.log('start of notes');

const fs=require('fs');

var addNote = (title, body)=>{
    //console.log('adding note',title,body);
    var notes=[];
    var note = {
        title,
        body
    };

    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
        
    } catch (e) {

    }

    // var duplicateNotes = notes.filter((n)=>{
    //     return n.title === title;
    // })

    var duplicateNotes = notes.filter((n)=> n.title === title );

    console.log('dup length',duplicateNotes.length);
    console.log('dup obj',duplicateNotes);

    if (duplicateNotes.length === 0) {
        notes.push(note);
    
    }
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var getAll = ()=>{
    console.log('get all');
};

var getNote = (title) =>{
    console.log('get note');
};

var removeNote = (title)=>{
    console.log('remove');
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
