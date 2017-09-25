
console.log('start of notes');

var addNote = (title, body)=>{
    console.log('adding note',title,body);
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
