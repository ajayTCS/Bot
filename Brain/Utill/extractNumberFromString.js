export class ExtractNumberFromString {
    constructor(str,delim){
        this._str=str;
        this.numArr="";
    }
    extractNumber(){
        let strTemp=this._str.split(" ");
        for(let data in strTemp){
            if(!isNaN(strTemp[data])){
                this.numArr=this.numArr+strTemp[data]
            }
        }
        return this.numArr;
    }
}