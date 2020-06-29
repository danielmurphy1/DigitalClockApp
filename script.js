
let monthName;
let pastNoon;  
let hours;

const determineMonth = function(monthNumber){ 
    switch (monthNumber){
    case 1: 
        monthName = "January";
        break;
    case 2: 
        monthName = "February";
        break;
    case 3: 
        monthName = "March";
        break;
    case 4: 
        monthName = "April";
        break;
    case 5: 
        monthName = "May";
        break;
    case 6: 
        monthName = "June";
        break;      
    case 7: 
        monthName = "July";
        break;     
    case 8: 
        monthName = "August";
        break;
    case 9: 
        monthName = "September";
        break;   
    case 10: 
        monthName = "October";
        break; 
    case 11: 
        monthName = "November";
        break;
    case 12: 
        monthName = "December";
        break;
    default:
    }
    return monthName;
};




const determineAmOrPm = function(hourNumber){
    if (hourNumber > 12){
        hours = hourNumber - 12;
        pastNoon = "PM";
    } else {
        hours = hourNumber;
        pastNoon = "AM";
    }
};

setInterval(function(){
    let current = new Date();
    let dayOrNight = current.getHours();
    let monthNumber = (current.getMonth()+1);
    determineMonth(monthNumber);
    determineAmOrPm(dayOrNight);
    let date = monthName + " " + current.getDate();
    let time = hours + ":" + current.getMinutes() + ":" + current.getSeconds() + " " + pastNoon;
    //need to get minutes and seconds to be two digits when < 10 - currently has one digit
    let today = document.getElementById("date");
    today.textContent = date;

    let clock = document.getElementById("time");
    clock.textContent = time;
}, 1000);

