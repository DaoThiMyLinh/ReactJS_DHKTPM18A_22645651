console.log('Bai 2-1');
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
}

const avgDolphins01 = calcAverage(44, 23, 71);
const avgKoalas01 = calcAverage(65, 54, 49);
console.log("Test Data 1:");
checkWinner(avgDolphins01, avgKoalas01);

const avgDolphins02 = calcAverage(85, 54, 41);
const avgKoalas02 = calcAverage(23, 34, 27);
console.log("\nTest Data 2:");
checkWinner(avgDolphins02, avgKoalas02);

console.log("-----------------------------");