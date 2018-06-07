import { Linking } from 'react-native';

export class OpenWebsite {
    constructor(url){
        this._url=url;
    }
    navigate(){
        return Linking.canOpenURL(this._url)
    }
}