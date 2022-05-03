const numberBill: HTMLInputElement = <HTMLInputElement>document.getElementById("inputBill")
const numberPeople: HTMLInputElement = <HTMLInputElement>document.getElementById("numberPeople")
const numberCustom: HTMLInputElement = <HTMLInputElement>document.getElementById("customButton")
const numberTotal: HTMLElement = <HTMLElement>document.getElementById("amountTotal")
const numberTip: HTMLElement = <HTMLElement>document.getElementById("amountTip")
const numberPercent: NodeList = <NodeList>document.querySelectorAll(".button")



numberBill.value = "0.00";
numberPeople.value = "1";
numberTip.innerHTML = "€ " + (0.00).toFixed(2)
numberTotal.innerHTML = "€ " + (0.00).toFixed(2)


export {numberBill, numberPeople, numberCustom, numberTip, numberTotal, numberPercent}
