const yearText = prompt ('How many years have you lived:');
const monthsText = prompt('How many months have you lived:');
const daysText = prompt('How many days have you livid:');

const year = Number(yearText);
const months = Number(monthsText);
const days = Number(daysText);

const days2 = ((year*365) + (months*30) + days);

console.log(`Have you ever lived ${days2}days`)