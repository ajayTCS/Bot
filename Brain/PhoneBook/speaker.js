import Tts from 'react-native-tts';

export default class Speaker {
    constructor(text){
        this._text=text;
    }
    speak = async ()=>{
        Tts.speak(this._text);
    }
}