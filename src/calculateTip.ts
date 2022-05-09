import { amountBill, amountPeople } from "./eventListener";
import { numberTip, numberTotal } from "./inputNumbers";

//Rechnet den Tip aus wenn amountPeople >= 1 ist und passt dann Zahlen in HTML an
function calculateTip(amountBill: number, amountTip: number, amountPeople: number): void {
    if (amountPeople >= 1) {
        let amountTotalPP = (amountBill * amountTip / amountPeople) + (amountBill / amountPeople);
        let amountTipPP = (amountBill * amountTip / amountPeople);
        numberTip.innerHTML = "€ " + amountTipPP.toFixed(2);
        numberTotal.innerHTML = "€ " + amountTotalPP.toFixed(2);
    }
}


export { calculateTip }