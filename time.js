
function formatUnits(n){
    return (n<10) ?  "0" + n.toString(): n.toString();
}

function updateTime(){
    var d  = new Date();
    output = d.getHours().toString() + ":" + formatUnits(d.getMinutes()) + ":" + formatUnits(d.getSeconds());
    var realtime = document.getElementById("realtime");
    realtime.innerHTML = output;
}

updateTime(); // so it runs once immediately.

setInterval(updateTime, 1000);