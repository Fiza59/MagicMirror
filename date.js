function getDayOfWeek(n){
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	return weekdays[n];
}

function getMonthName(n){
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[n];
}

function monthdaySuffix(n){
	if (n % 10 == 1) return "st";
	if (n % 10 == 2) return "nd";
	if (n % 10 == 3) return "rd";
	return "th"; 
}

var d = new Date();
var weekday = getDayOfWeek(d.getDay());
var monthName = getMonthName(d.getMonth());
var monthday = d.getDate().toString()+monthdaySuffix(d.getDate());
//var year = d.getFullYear().toString();
		
document.getElementById("datediv").innerHTML += (weekday + ", " + monthName + " " + monthday);