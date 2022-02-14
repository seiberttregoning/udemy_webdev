import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';



const inputList = process.argv.slice(2);

const inputString = inputList.join(' ').toString().toLowerCase();

// console.log(inputString);

const langCode = franc(inputString);

// console.log(langCode);

const languageJSON = langs.where('3', langCode);

try {
    console.log(languageJSON.name.green);
} catch (error) {
    console.log('It looks like your input was too short or nonsense, try again'.red);
}