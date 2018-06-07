export default class MultiplyClassB {
    constructor(num1,num2){
        this._num1=num1;
        this._num2=num2;
    }
    async result(){
        let arrable=[];
        arrable.push(this._num1)
        arrable.push(this._num2)
        let tamp={numbers:arrable,result:`multiplication result of ${this._num1} and ${this._num2} is ${this._num1*this._num2}`}
        return JSON.stringify(tamp);
    }
}