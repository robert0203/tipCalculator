import { numberBill } from "./inputNumbers"


numberBill.addEventListener("change", function(){
    console.log("test")
})


console.log(calculateTip(50, 0.15, 2))