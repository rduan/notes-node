
console.log('start of notes');

const fs=require('fs');

var fetchNotes = ()=>{
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
        
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    
}; 

var addNote = (title, body)=>{
    //console.log('adding note',title,body);
    var notes= fetchNotes();
    var note = {
        title,
        body
    };

    

    // var duplicateNotes = notes.filter((n)=>{
    //     return n.title === title;
    // })

    var duplicateNotes = notes.filter((n)=> n.title === title );

    console.log('dup length',duplicateNotes.length);
    console.log('dup obj',duplicateNotes);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = ()=>{
    console.log('get all');
};

var getNote = (title) =>{
    console.log('get note');
};

var removeNote = (title)=>{
    console.log('remove');
    var notes = fetchNotes();
    var newNotes = notes.filter((n)=>n.title !== title);
    saveNotes(newNotes);
    return notes.length !== newNotes.length;

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
