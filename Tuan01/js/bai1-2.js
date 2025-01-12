console.log('Bai 1-2');
let markMass2 = 78;
let markHeight2 = 1.69;
let johnMass2 = 92;
let johnHeight2 = 1.95;
let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);
let markHigherBMI2 = markBMI2 > johnBMI2;


if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
}
console.log("-----------------------------");