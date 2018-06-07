import SpeechAndroid from 'react-native-android-voice';

export default class Listener {
    constructor(){
    }
    listen = async ()=>{
       let res=await SpeechAndroid.startSpeech("listening", SpeechAndroid.ENGLISH_INDIA);
       return res;
    }
}