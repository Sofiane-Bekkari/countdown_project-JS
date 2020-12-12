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

// comming next a new function