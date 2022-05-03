function calculateTip(bill:number, percent:number, people:number):number {
    return (bill * percent / people) + (bill / people);
}

console.log(calculateTip(50, 0.15, 2));