console.log('Bai 1-3');

// Function to calculate the average score of a team
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Function to determine the winner based on average scores and minimum score rules
function determineWinner(avgDolphins, avgKoalas, minScore = 100) {
    if (avgDolphins >= minScore && avgDolphins > avgKoalas) {
        console.log(`Dolphins win with an average score of ${avgDolphins.toFixed(2)}!`);
    } else if (avgKoalas >= minScore && avgKoalas > avgDolphins) {
        console.log(`Koalas win with an average score of ${avgKoalas.toFixed(2)}!`);
    } else if (avgDolphins >= minScore && avgKoalas >= minScore && avgDolphins === avgKoalas) {
        console.log(`It's a draw! Both teams have an average score of ${avgDolphins.toFixed(2)}.`);
    } else {
        console.log("No team wins the trophy as the minimum score requirement is not met!");
    }
}

// Test Data 1
const avgDolphins1 = calculateAverage(96, 108, 89);
const avgKoalas1 = calculateAverage(88, 91, 110);
console.log("Test Data 1:");
determineWinner(avgDolphins1, avgKoalas1);

// Test Data Bonus 1
const avgDolphins2 = calculateAverage(97, 112, 101);
const avgKoalas2 = calculateAverage(109, 95, 123);
console.log("\nTest Data Bonus 1:");
determineWinner(avgDolphins2, avgKoalas2);

// Test Data Bonus 2
const avgDolphins3 = calculateAverage(97, 112, 101);
const avgKoalas3 = calculateAverage(109, 95, 106);
console.log("\nTest Data Bonus 2:");
determineWinner(avgDolphins3, avgKoalas3);

console.log("-----------------------------");
