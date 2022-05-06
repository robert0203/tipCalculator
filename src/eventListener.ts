import { calculateTip } from "./calculateTip";
import { buttonReset, numberBill, numberCustom, numberPeople, numberPercent, numberTip, numberTotal } from "./inputNumbers"
import { percent } from "./percent";


numberBill.addEventListener("input", billInput);
numberPeople.addEventListener("input", peopleInput);
numberPercent.forEach(numberButton => numberButton.addEventListener("click", event => handleClick(event)));
numberCustom.addEventListener("input", customInput);
buttonReset.addEventListener("click", reset);

let amountBill: number = 0.00;
let amountPeople: number = 1;
let amountTip: number = 0.15;

function billInput() {
    amountBill = parseFloat(numberBill.value)
    calculateTip(amountBill, amountTip, amountPeople);
}

function peopleInput() {
    amountPeople = parseFloat(numberPeople.value)
    calculateTip(amountBill, amountTip, amountPeople);
}

function handleClick(event: Event) {
    clearBackground();
    amountTip = parseInt((event.target as HTMLElement).innerHTML) / 100;
    calculateTip(amountBill, amountTip, amountPeople);
    ((event.target) as HTMLElement).style.backgroundColor = "hsl(172, 67%, 45%)";
    ((event.target) as HTMLElement).style.color = "hsl(183, 100%, 15%)";
}

function clearBackground() {
    let colorButtons: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("button") as HTMLCollectionOf<HTMLElement>;
    for (let item of colorButtons) {
        console.log(item.id);
        item.style.backgroundColor = "hsl(183, 100%, 15%)";
        item.style.color = "white"
    }

}

function customInput() {
    amountTip = parseFloat(numberCustom.value) / 100;
    calculateTip(amountBill, amountTip, amountPeople);
}


function reset() {
    amountBill = 0.00;
    amountPeople = 1;
    amountTip = 0.15;
    numberBill.value = "0.00";
    numberPeople.value = "1";
    numberTip.innerHTML = "€ " + (0.00).toFixed(2);
    numberTotal.innerHTML = "€ " + (0.00).toFixed(2);
    numberCustom.value = "";
}



export { peopleInput, billInput, amountBill, amountPeople, amountTip }