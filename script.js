 
let monthName;
let pastNoon;  
let isMilitaryTime = false;


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

const determineDay = function(dayNumber) {
    switch (dayNumber){
        case 1: 
            dayName = "Sunday";
            break;
        case 2: 
            dayName = "Monday";
            break;
        case 3: 
            dayName = "Tuesday";
            break;
        case 4: 
            dayName = "Wednesday";
            break;
        case 5: 
            dayName = "Thursday";
            break;
        case 6: 
            dayName = "Friday";
            break;      
        case 7: 
            dayName = "Saturday";
            break;
        default:     
        } 
        return dayName;
    };      



const determineAmOrPm = function(hourNumber){
    if (hourNumber >= 12){
        
        pastNoon = "PM"; 
    } else {
        
        pastNoon = "AM";
    }
};



const toggleMilitaryTime = function(){
    console.log("test");
    if(isMilitaryTime){
        isMilitaryTime = false;
    } else if (!isMilitaryTime){
        isMilitaryTime = true;
    }
    return console.log(isMilitaryTime);
};



document.getElementById("btn").addEventListener("click", toggleMilitaryTime);

setInterval(function(){
    let current = new Date();
    let hours = current.getHours(); 
    let monthNumber = (current.getMonth()+1);
    let dayNumber = current.getDay()+1;
    let seconds = (current.getSeconds() <10 ? "0" : "") + current.getSeconds();
    let minutes = (current.getMinutes() <10 ? "0" : "") + current.getMinutes();
    determineMonth(monthNumber);
    determineAmOrPm(hours); 
    determineDay(dayNumber);
    let date = dayName + "," + " " + monthName + " " + current.getDate();
    let time = (isMilitaryTime === false && pastNoon === "PM" && hours > 12 ? hours -12 : hours) + ":" + minutes + ":" + seconds + " " + pastNoon; // hours var needs a conditional to check isMilitaryTime - if false hours-12 if true hours
    let today = document.getElementById("date");
    today.textContent = date;

    let clock = document.getElementById("time");
    clock.textContent = time;
}, 1000);

