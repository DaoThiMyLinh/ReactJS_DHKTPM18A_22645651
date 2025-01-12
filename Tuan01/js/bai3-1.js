console.log('Bai 3-1');

function printForecast(arr) {
    let forecastString = "..."; 
    for (let i = 0; i < arr.length; i++) {
        forecastString += ` ${arr[i]}ºC in ${i + 1} days ...`;
    }

    console.log(forecastString); 
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1); 
printForecast(data2); 


console.log("-----------------------------");