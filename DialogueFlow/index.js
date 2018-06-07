export default class CallDialogueFlow {
    constructor(){
    }
    async _callDialogueFlow(text){
        try{
            let resp=await fetch('https://api.dialogflow.com/v1/query?v=20170712', {
              method: 'POST',
              headers: {
                Accept:'application/json',
                'Authorization': 'Bearer b2c74d4ab86a44dea0eb144470199c7e',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "lang": "en",
                "query": text,
                "sessionId": "1234566655442211554",
                "timezone": "Asia/Calcutta"
              }),
            });
            let responseJson = await resp.json();
                return responseJson.result.fulfillment.speech
        }catch (error) {
            alert(error);
        }
    }
}