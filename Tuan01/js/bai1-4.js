console.log('Bai 1-4');
function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const totalValue = tip + bill;
    console.log(`The bill was ${bill}, the tip was 41.${tip}, and the total value
        ${totalValue}`)
}
//Test data 1
calculateTip(275);
calculateTip(40);
calculateTip(430);
console.log("-----------------------------");