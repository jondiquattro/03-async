'use strict';


const fs = require('fs');
const faker = require('faker')
const readline = require('readline');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the name of the file ', (answer) => {
    let rando =faker.random.number();

    console.log('\n opened file')
    fs.readFile(`./files/${answer}`, (err,data)=>{
        if(err){throw err;}
        console.log(data.toString())
    })
    console.log('reading file')

    fs.appendFile('./files/test.txt', '\n'+rando+'\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
    console.log('closed')
  });
  fs.readFile(`./files/${answer}`, (err,data)=>{
    if(err){throw err;}
    console.log('\n opened file')

    console.log('reading file')
    console.log(data.toString())
})
//   console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});