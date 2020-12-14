// Aray of Months
const months = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
];

// Aray of Days
const weekDays = ['Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
];


// grab the main variable
const giveaway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const counterItems = document.querySelectorAll('.deadline-format h4');

// future date
const futureDate = new Date(2021, 2, 10, 15, 30, 0)
//console.log(futureDate);
//console.log(futureDate.getDay());

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
// get month from index array
month = months[month];
// get weekday from weekdays array
const weekday = weekDays[futureDate.getDay()];

const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `giveway ends on ${weekday} ${date} ${month} ${year} ${hour}:${minute}am`


//  get Future time on mellisecond 
const futureTime = futureDate.getTime();
console.log('FOR future:', futureTime);

// fuction for remining time
function getReminingTime(){
    // varaible for current time
    const today = new Date().getTime();
    //console.log('Current time:', today);

    // subtract future time from current time
    const remineTime = futureDate - today 
    //console.log('Here reminded time:', remineTime);  

    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min  **formula** 
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    console.log(oneDay,oneHour,oneMinute);
}

getReminingTime();