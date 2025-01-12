console.log('Bai 2-4');

const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips4 = [];
const total4 = [];

function calcTip4() {
    bills4.forEach(bill => {
        const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Tính tip
        tips4.push(tip); 

        const total = bill + tip; 
        total4.push(total); 
    });
}

calcTip4();

console.log("Bills:", bills4); 
console.log("Tips:", tips4);  
console.log("Totals:", total4); 

console.log("-----------------------------");