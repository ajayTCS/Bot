
import Tts from 'react-native-tts';
import Speaker from './speaker.js';
import Listener from './listener.js';
var Contacts = require('react-native-contacts');
//import SpeechAndroid from 'react-native-android-voice';

Tts.setDucking(true);

export default class Prompt {
    constructor(){
    }
    startPrompt = async ()=>{
        
        //await speaker.speak("ok i will add a contact")
        //await speaker.speak("need to know few information please provide me that")
        //var spokenText = await SpeechAndroid.startSpeech("listening", SpeechAndroid.ENGLISH_INDIA);
        //await speaker.speak("do you wana add email address ")
        let testStart=0;
        let testStart_next=1;
        let speech_count=1;
        let name="";
        let mob="";
        Tts.addEventListener('tts-finish', async (event) => {
            //alert("finished")
            //let ll=new Listener();
            //var mm=await SpeechAndroid.startSpeech("listening", SpeechAndroid.ENGLISH_INDIA);
            if(testStart==0){
                let ll=new Listener();
                let name_1= await ll.listen();
                //alert("name is"+name)
                name=name_1;
                testStart=1;
                testStart_next=testStart_next-1;
            }
            if(testStart_next==0 && speech_count==1){
                speech_count=speech_count+1;
                let sp=new Speaker();
                let nmbr=await sp.speak("number")
                let lm=new Listener();
                let mx=await lm.listen();
                mob=mx;
                //alert("name is -- "+name+" -- and mobile is -- "+mob+" --")
                //alert("number is"+mx);
                let contPayload={
                    givenName:name,
                    phoneNumbers: [{
                        label: "mobile",
                        number: mob,
                    }]
                };
                Contacts.addContact(contPayload, async (err) => { 
                    if(err){
                        alert(JSON.stringify(err))
                    }else{
                        //alert("contact saved successfully");
                        let speakerTemp=new Speaker();
                        let testingVoiceSuccess=await speakerTemp.speak("contact saved successfully please check your contact")
                    }
                 })
            }
        });
        let speaker=new Speaker();
        let data=await speaker.speak("ok i will add a contact , i just need to know few information please provide me that, Name of person")
        //alert(data);
        
        
        
    }
}