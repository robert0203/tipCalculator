
//Kriegt String rein "5%", replaced dann das "%" mit nichts, sodass ich das dann durch 100 teilen kann um mit dem Prozentwert weiterzurechnen
function percent(textPercent:string):number{
let textWithoutPercent:string = textPercent.replace("%", "");
return parseInt(textWithoutPercent) / 100;
}

export {percent};