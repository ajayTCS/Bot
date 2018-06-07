/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid, 
  TouchableOpacity, 
  Linking
} from 'react-native';

import SpeechAndroid from 'react-native-android-voice';
import Tts from 'react-native-tts';
import AddClassB from './Brain/Math/add.js';
import SubtractClassB from './Brain/Math/subtract.js';
import MultiplyClassB from './Brain/Math/multiply.js';
import DivideClassB from './Brain/Math/divide.js';
import CallDialogueFlow from './DialogueFlow/index.js';
import MakeCall from './Brain/Call/makeCall.js';
import { ExtractNumberFromString } from './Brain/Utill/extractNumberFromString.js';
import { OpenWebsite } from './Brain/Website/openWebsite.js';
import { ExtractWebsiteFromString } from './Brain/Utill/extractWebsiteFromString.js';
import GetMyContacts from './Brain/Call/contacts.js';
import AddAContacts from './Brain/PhoneBook/addContact.js';
import SmsAndroid  from 'react-native-get-sms-android';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
Tts.setDefaultLanguage('en-IN');
Tts.setDucking(true);
type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		this.state = {
			pratibhaText:"",
			ajayText:""
		}
	}
async _buttonClick(){
	var that=this;
	that.setState({pratibhaText:"",ajayText:""})
    try{
        //More Locales will be available upon release.
        var spokenText = await SpeechAndroid.startSpeech("listening", SpeechAndroid.ENGLISH_INDIA);
        //ToastAndroid.show(spokenText , ToastAndroid.LONG);
	//Tts.speak(spokenText);
	that.setState({ajayText:spokenText})
	let cdf=new CallDialogueFlow();
	var x=await cdf._callDialogueFlow(spokenText)
	switch(x){
		case "add m with n" : 
			let num1_ad;
			let num2_ad;
			let sptext_add=spokenText.split(' ');
			sptext_add.map( (a,b)=>{
				if(a.match(/^-?\d+$/)){
					if(num1_ad==undefined){
						num1_ad=a;
					}else{
						num2_ad=a;
					}
				}
			} )
			let ad=new AddClassB(num1_ad,num2_ad);
			let resAdd=await ad.result()
			Tts.speak(JSON.parse(resAdd).result);
			that.setState({pratibhaText:JSON.parse(resAdd).result})
		break;
		case "subtract m from n" : 
			let num1_sd;
			let num2_sd;
			let sptext_sub=spokenText.split(' ');
			sptext_sub.map( (a,b)=>{
				if(a.match(/^-?\d+$/)){
					if(num1_sd==undefined){
						num1_sd=a;
					}else{
						num2_sd=a;
					}
				}
			} )
			let sd=new SubtractClassB(num1_sd,num2_sd);
			let resSub=await sd.result()
			Tts.speak(JSON.parse(resSub).result);
			that.setState({pratibhaText:JSON.parse(resSub).result})
		break;
		case "multiply m by n" : 
			let num1_mp;
			let num2_mp;
			let sptext_mlt=spokenText.split(' ');
			sptext_mlt.map( (a,b)=>{
				if(a.match(/^-?\d+$/)){
					if(num1_mp==undefined){
						num1_mp=a;
					}else{
						num2_mp=a;
					}
				}
			} )
			let md=new MultiplyClassB(num1_mp,num2_mp);
			let resMp=await md.result()
			Tts.speak(JSON.parse(resMp).result);
			that.setState({pratibhaText:JSON.parse(resMp).result})
			break;
		case "divide m by n" : 
			let num1_dd;
			let num2_dd;
			let sptext_dvd=spokenText.split(' ');
			sptext_dvd.map( (a,b)=>{
				if(a.match(/^-?\d+$/)){
					if(num1_dd==undefined){
						num1_dd=a;
					}else{
						num2_dd=a;
					}
				}
			} )
			let dd=new DivideClassB(num1_dd,num2_dd);
			let resDd=await dd.result()
			Tts.speak(JSON.parse(resDd).result);
			that.setState({pratibhaText:JSON.parse(resDd).result})
			break;
		case "Hello, I am pratibha a bot created by badcoder, may I know to whom I am talking to?" :
			Tts.speak("Hello, I am pratibha,may i know the name of the person to whoom i am talking to ? please !");
			that.setState({pratibhaText:"Hello, I am pratibha,may i know the name of the person to whoom i am talking to ? please !"});
			break;
		case "make call" :
			let numExtractor=new ExtractNumberFromString(spokenText," ")
			let numArr=numExtractor.extractNumber();
			if(numArr.length==10){
				let mkCall=new MakeCall(numArr);
				await Tts.speak(`ok calling`);
				that.setState({pratibhaText:`calling to ${numArr.toString()}`});
				mkCall.doCall().catch((err)=>{
					alert(err)
				})
			}else{
				Tts.speak(x);
				let getMyContact=new GetMyContacts(spokenText.replace('call ',""));
				await getMyContact.logContacts()
			}
			break;
		case "navigate to" :
			await Tts.speak("please wait navigating");
			let webObj=new ExtractWebsiteFromString(spokenText);
			let website=webObj.doExtract()
			if(website.indexOf('www.')>-1){
				Linking.openURL(`https://${website}`)
			}else{
				Linking.openURL(`https://www.${website}`)
			}
			//alert(website)
			
			break;
		case "Contact modification" :
		
			if(spokenText.indexOf('add')>-1 || spokenText.indexOf('save')>-1 || spokenText.indexOf('new')>-1){
				that.setState({pratibhaText:"contact saved automation is active now , please do respond to pratibha"});
				let addContact=new AddAContacts();
				 addContact.addContact();
				await sleep(8000);
				var xgg=await SpeechAndroid.startSpeech("listening", SpeechAndroid.ENGLISH_INDIA);
				alert(xgg);
			}else{

			}
			break;
		case "unread message" :
			await Tts.speak("ok !")

			var filter = {
				box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
				// the next 4 filters should NOT be used together, they are OR-ed so pick one
				read: 0,
				maxCount: 1000, // count of SMS to return each time
			};
			
			SmsAndroid.list(JSON.stringify(filter), (fail) => {
					console.log("Failed with this error: " + fail)
				},
				(count, smsList) => {
					Tts.speak(`you have total ${count} unread message`)
					//alert(JSON.stringify(smsList))
				});
			break;
		case "list unread message" : 
			await Tts.speak("ok !")
			var filter = {
				box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
				// the next 4 filters should NOT be used together, they are OR-ed so pick one
				read: 0,
				maxCount: 1000, // count of SMS to return each time
			};
			
			SmsAndroid.list(JSON.stringify(filter), (fail) => {
					console.log("Failed with this error: " + fail)
				},
				(count, smsList) => {
					//Tts.speak(`you have total ${count} unread message`)
					alert(JSON.stringify(smsList))
				});
				break;
		default :
			if(x=="get my contacts"){
				
			}
			Tts.speak(x);
			that.setState({pratibhaText:x})
		break;
	}
    }catch(error){
        switch(error){
            case SpeechAndroid.E_VOICE_CANCELLED:
                ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
                break;
            case SpeechAndroid.E_NO_MATCH:
                ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
                break;
            case SpeechAndroid.E_SERVER_ERROR:
                ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
                break;
            /*And more errors that will be documented on Docs upon release*/
        }
    }
}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._buttonClick.bind(this)}>
					<Text style={styles.welcome}>
						Click for assistance
					</Text>
				</TouchableOpacity>
				<Text style={styles.welcome}>
						{(this.state.ajayText)?(`You : - : ${this.state.ajayText}`):false}
				</Text>
				<Text style={styles.welcome}>
						{(this.state.pratibhaText)?(`Pratibha : - : ${this.state.pratibhaText}`):false}
				</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
