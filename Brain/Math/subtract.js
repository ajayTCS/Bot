export default class SubtractClassB {
    constructor(num1,num2){
        this._num1=num1;
        this._num2=num2;
    }
    async result(){
        let arrable=[];
        arrable.push(this._num1)
        arrable.push(this._num2)
        let tamp={numbers:arrable,result:`subtraction result of ${this._num1} from ${this._num2} is ${this._num2-this._num1}`}
        return JSON.stringify(tamp);
    }
}