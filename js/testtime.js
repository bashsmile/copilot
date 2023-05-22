const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const daysBetween = (date1, date2) => {
    const diff = date2 - date1;
    return Math.floor(diff / days);
}

const today = new Date();
const christmas = new Date('2023-12-25 00:00:00');

console.log(daysBetween(today, christmas));