'use strict';

const fileReader = require('./lib/reader-fixed.js');

// Obtain and assert input
let files = process.argv.slice(2);


// if( ! (files instanceof Array && files.length) ) {
//   throw new Error('Invalid Args');
// }

//fileReader is stroing the require lib/reader.js

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});

