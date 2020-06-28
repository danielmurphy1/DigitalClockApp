let current = new Date();
let monthNumber = (current.getMonth()+1);
let monthName;
let pastNoon;
let dayOrNight = current.getHours();




const determineAmOrPm = function(){
    if (current.getHours() > 12){
        dayOrNight = (current.getHours() - 12);
        pastNoon = "PM";
    } else {
        pastNoon = "AM";1
    }
};

const determineMonth = function(){ 
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



 determineMonth();
 determineAmOrPm();
let date = monthName + " " + current.getDate();
let time = dayOrNight + ":" + current.getMinutes() + ":" + current.getSeconds() + " " + pastNoon;


console.log(time);
console.log(date);

let today = document.getElementById("date");
today.textContent = date;

let clock = document.getElementById("time");
clock.textContent = time;



