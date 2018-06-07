export default class AddClassB {
    constructor(num1,num2){
        this._num1=num1;
        this._num2=num2;
    }
    async result(){
        let arrable=[];
        arrable.push(this._num1)
        arrable.push(this._num2)
        let tamp={numbers:arrable,result:`addition result of ${this._num1} and ${this._num2} is ${parseInt(this._num1)+parseInt(this._num2)}`}
        return JSON.stringify(tamp);
    }
}