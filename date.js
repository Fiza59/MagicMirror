function getDayOfWeek(n){
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	return weekdays[n];
}

function getMonthName(n){
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[n];
}

function monthdaySuffix(n){
	switch (n%10){
		case 1: return "st";
		case 2: return "nd";
		case 3: return "rd";
		default: return "th";
	}
}

var d = new Date();
var weekday = getDayOfWeek(d.getDay());
var monthName = getMonthName(d.getMonth());
var monthday = d.getDate().toString()+monthdaySuffix(d.getDate());
//var year = d.getFullYear().toString();
		
document.getElementById("datediv").innerHTML += (weekday + ", " + monthName + " " + monthday);