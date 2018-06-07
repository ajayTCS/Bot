export class ExtractWebsiteFromString {
    constructor(str){
        this._str=str;
        this._retArr=[];
    }
    doExtract=() => {
        let spltd=this._str.split(' ');
        for (let key in spltd) {
            if (spltd[key].indexOf('.')>0 || spltd[key].indexOf('://')>0) {
                this._retArr.push(spltd[key]);
            }
        }
        return this._retArr;
    }
}