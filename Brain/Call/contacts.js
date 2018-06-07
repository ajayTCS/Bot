var Contacts = require('react-native-contacts')

export default class GetMyContacts {
    constructor(filter){
        this._filter=filter
    }
    logContacts=async ()=>{
       await Contacts.getContactsMatchingString(this._filter, (err, contacts) => {
        if(err === 'denied'){
          alert(JSON.stringify(err))
        } else {
          alert(JSON.stringify(contacts))
        }
      })
    }
}