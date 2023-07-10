// Challenge: Letter Frequencies
"use strict";

const {readUserFile, controlExtens, controlValidName, charCountOccurances} = require('./functions');

const fs = require('fs-js');
const readline = require ('readLine');


const echo = console.log;
let args = process.argv;
let arg = args[2];
echo(' Third argument' + ': ' + arg);
fs.readFile(arg, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log("DATA: "+data);
  /**function to read user's file*/
  readUserFile(arg,data);
  
});





