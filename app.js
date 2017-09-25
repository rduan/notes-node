
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];

console.log(process.argv);
console.log('Command:', command);

if (command === 'add') {
    console.log('add')
} else if (command === 'list') {
    console.log('list')
}