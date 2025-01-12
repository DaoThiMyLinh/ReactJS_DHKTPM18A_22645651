console.log('Bai 2-3');
const mark = {
    fullname: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI() {
        return this.mass/(this.height ** this.height)
    }
};

const john = {
    fullname: 'John',
    mass: 92,
    height: 1.95,
    calcBMI() {
        return this.mass/(this.height ** this.height)
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI().toFixed(2)}) is higher than John's (${john.calcBMI().toFixed(2)})!`);
} else {
    console.log(`John's BMI (${john.calcBMI().toFixed(2)}) is higher than Mark's (${mark.calcBMI().toFixed(2)})!`);
}

console.log("-----------------------------");