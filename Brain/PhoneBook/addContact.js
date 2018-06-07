var Contacts = require('react-native-contacts')
import Prompt from './prompt/prompt.js';

export default class AddAContacts {
    constructor(){
    }
    addContact=async ()=>{
       let prompt=new Prompt();
       await prompt.startPrompt();
    }
}