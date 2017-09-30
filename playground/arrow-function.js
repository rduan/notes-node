var user = {
    name: 'rd',

    sayHi: ()=>{
        // does not work, because arrow func not bind, no auguments binding
        console.log(arguments);
        console.log(`hi, I'am ${this.name}`);
    },

    sayHiAlt () {
        console.log(arguments);
        console.log(`hi, I'am ${this.name}`);
    }
}

//wrong result
user.sayHi();

user.sayHiAlt();