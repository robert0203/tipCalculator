import { numberBill, numberCustom, numberPeople, numberPercent } from "./inputNumbers"
import { percent } from "./percent";


numberBill.addEventListener("input", billInput);
numberPeople.addEventListener("input", peopleInput);
numberPercent.forEach(numberButton => numberButton.addEventListener("click", event => handleClick(event)));
numberCustom.addEventListener("input", customInput);

let amountBill: number = 0.00;
let amountPeople: number = 1;
let amountTip:number = 0.15;

function billInput() {
    amountBill = parseFloat(numberBill.value)
    console.log(amountBill);
}

function peopleInput() {
    amountPeople = parseFloat(numberPeople.value)
    console.log(amountPeople);
}

function handleClick(event:Event) {
amountTip = parseInt((event.target as HTMLElement).innerHTML) / 100
console.log(amountTip)
}

function customInput() {
    amountTip = parseFloat(numberCustom.value) / 100
}
console.log(customInput);


export { peopleInput, billInput, amountBill, amountPeople, amountTip }