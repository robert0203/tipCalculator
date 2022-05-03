

function percent(textPercent:string):number{
let textWithoutPercent:string = textPercent.replace("%", "");
return parseInt(textWithoutPercent) / 100;
}

export {percent};