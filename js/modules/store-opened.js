function storeOpened() {}

const operation = document.querySelector('[data-week]');
const daysWeek = operation.dataset.week.split(',').map(Number);
const hourWeek = operation.dataset.hours.split(',').map(Number);

const dateNow = new Date();
const dayNow = dateNow.getDay();
const hourNow = dateNow.getHours();

const weekOpen = daysWeek.includes(dayNow);
const weekHour = hourNow >= hourWeek[0] && hourNow < hourWeek[1];

if (weekOpen && weekHour) operation.classList.add('active');

export default storeOpened;
