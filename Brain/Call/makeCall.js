//import call from 'react-native-phone-call';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

export default class MakeCall {
    constructor(num){
        this._num=num;
    }
    doCall(){
        return RNImmediatePhoneCall.immediatePhoneCall(this._num)
    }
}