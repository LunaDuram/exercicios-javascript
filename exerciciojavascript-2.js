const prompt = require('prompt-sync')() 
const daysText = prompt('Type your age in days:');
const days = Number(daysText);

const years = days/365;
const months = (days%365)/30;
const days2 = (days%365)%365;

console.log (`totalYears:,${Math.floor (years)}, totalMonths: ${Math.floor (months)}, 
totalDays: ${days2}`);