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
const countItems = document.querySelectorAll('.deadline-format h4');

// new functionality for adding 10 days for current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
// below put each current date *plus ++ with day*
const futureDate = new Date(currentYear, currentMonth, currentDay +2, 20, 30, 0);

// future date hard coded for desired date
//const futureDate = new Date(2020, 11, 15, 8, 30, 0);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
// get month from index array
month = months[month];
// get weekday from weekdays array
const weekday = weekDays[futureDate.getDay()];

const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year}, ${hour}:${minute}pm`


//  get Future time on mellisecond 
const futureTime = futureDate.getTime();
console.log('FOR future:', futureTime);


// fuction for remining time
function getReminingTime(){
    // varaible for current time
    const today = new Date().getTime();
    //console.log('Current time:', today);

    // subtract future time from current time
    const remineTime = futureTime - today 
    console.log('Here reminded time:', remineTime);  

    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min  **formula** 
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    //console.log(oneDay,oneHour,oneMinute);

    // calcuclte all values
    let days = remineTime / oneDay;
    // reassingnd days 
    days = Math.floor(days); 
    let hours = Math.floor((remineTime % oneDay) / oneHour);
    const minutes = Math.floor((remineTime % oneHour) / oneMinute);
    const seconds = Math.floor((remineTime % oneMinute) / 1000);


    // add a 0 to values less then 10
    function format(add){
        if (add < 10) {
            return (add = `0${add}`)
        }
        return add
    }

    // create array values for cal
    const showTime = [days,hours,minutes,seconds] 

    // loop through countItems and put showTime values
    countItems.forEach(function (item, index) {
        item.innerHTML = format(showTime[index]);
    });
    
    // if counter is 0 show the ending
    if (remineTime < 0) {
        deadLine.innerHTML = `<h4>This Giveaway has ends</h4>`
    }

}

//show second each sec
let showSeconds = setInterval(getReminingTime,1000);

getReminingTime();