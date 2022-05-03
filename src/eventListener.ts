import { numberBill, numberCustom, numberPeople, numberPercent } from "./inputNumbers"


numberBill.addEventListener("input", billInput);
numberPeople.addEventListener("input", peopleInput);


let amountBill:number = 0.00;
let amountPeople:number = 1;

function billInput(){
    amountBill = parseFloat(numberBill.value)
    console.log(amountBill);
}

function peopleInput(){
    amountPeople = parseFloat(numberPeople.value)
    console.log(amountPeople);
}

export{peopleInput, billInput, amountBill, amountPeople}