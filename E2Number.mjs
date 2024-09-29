import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


let minimum = 1
let maximum = 9


let getal = parseFloat(await userInput.question(" Geef een getal "))

if (getal > minimum && getal < maximum){
    console.log(getal + ' ligt tussen ' + minimum + ' en ' + maximum + ' .');
  } else {
    console.log(getal + ' ligt niet tussen ' + minimum + ' en ' + maximum);
  }

process.exit()
