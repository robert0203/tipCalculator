import { billInput, peopleInput } from "./eventListener";
import { numberPercent } from "./inputNumbers";
import { percent } from "./percent";

peopleInput();
billInput();

numberPercent.forEach(button => console.log(button.textContent));

console.log(percent("5%"));