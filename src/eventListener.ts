import { calculateTip } from "./calculateTip";
import { buttonReset, msgError, numberBill, numberCustom, numberPeople, numberPercent, numberTip, numberTotal } from "./inputNumbers"

//Verschiedene Eventlistener
numberBill.addEventListener("input", billInput);
numberPeople.addEventListener("input", peopleInput);
numberPercent.forEach(numberButton => numberButton.addEventListener("click", event => handleClick(event)));
numberCustom.addEventListener("input", customInput);
buttonReset.addEventListener("click", reset);

//Deklaration Default-Werte
let amountBill: number = 0.00;
let amountPeople: number = 1;
let amountTip: number = 0.15;

//Liest Input-Feld mit Rechnungssumme
function billInput() {
    amountBill = parseFloat(numberBill.value)
    calculateTip(amountBill, amountTip, amountPeople);
}

//Liest Input-Feld mit Anzahl der Personen
function peopleInput() {
    amountPeople = parseFloat(numberPeople.value)
    calculateTip(amountBill, amountTip, amountPeople);

    /*if(amountPeople < 1){
        msgError.style.display = "flex";
        numberPeople.style.border = "orangered";
    }else{
        msgError.style.display = "none";
        numberPeople.style.border = "none";
        calculateTip(amountBill, amountTip, amountPeople);
    }*/
}

//Zuerst wird der HIntergrund/ Schriftfarbe der Buttons zurückgesetzt und dann dort gesetzt wo ich geklickt hab (target)
function handleClick(event: Event) {
    clearBackground();
    amountTip = parseInt((event.target as HTMLElement).innerHTML) / 100;
    calculateTip(amountBill, amountTip, amountPeople);
    ((event.target) as HTMLElement).style.backgroundColor = "hsl(172, 67%, 45%)";
    ((event.target) as HTMLElement).style.color = "hsl(183, 100%, 15%)";
}

//Setzt den Hintergrund/ Schriftfarbe der Buttons zurück 
function clearBackground() {
    let colorButtons: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("button") as HTMLCollectionOf<HTMLElement>;
    for (let item of colorButtons) {
        item.style.backgroundColor = "hsl(183, 100%, 15%)";
        item.style.color = "white"
    }

}

//Liest Input-Feld und teilt dann durch 100 um Prozentwert zum weiterrechnen zu benutzen
function customInput() {
    amountTip = parseFloat(numberCustom.value) / 100;
    calculateTip(amountBill, amountTip, amountPeople);
}

//Setzt nach Click Werte wieder auf "0"
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