let numberBill: HTMLInputElement = <HTMLInputElement>document.getElementById("inputBill")
let numberPeople: HTMLInputElement = <HTMLInputElement>document.getElementById("numberPeople")
let numberCustom: HTMLInputElement = <HTMLInputElement>document.getElementById("customButton")
let numberTotal: HTMLElement = <HTMLElement>document.getElementById("amountTotal")
let numberTip: HTMLElement = <HTMLElement>document.getElementById("amountTip")



function test(numberBill:number){
    if(numberBill > 0.00){
        console.log(numberBill)
    }
}

export {numberBill, numberPeople, numberCustom, numberTip, numberTotal}
