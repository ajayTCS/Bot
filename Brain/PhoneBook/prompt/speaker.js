import Tts from 'react-native-tts';
Tts.setDefaultLanguage('en-IN');

export default class Speaker {
    constructor(){
    }
    speak = async (_text)=>{
        Tts.setDefaultLanguage('en-IN');
        let data="";
        Tts.addEventListener('tts-finish', (event) => {
            data="finish";
        });
       let res=await Tts.speak(_text);
       
       return res;
    }
}