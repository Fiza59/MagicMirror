
function formatUnits(n){
    return (n<10) ?  "0" + n.toString(): n.toString();
}

function updateTime(){
    var d  = new Date();
    output = d.getHours().toString() + ":" + formatUnits(d.getMinutes()) + ":" + formatUnits(d.getSeconds());
    var realtime = document.getElementById("realtime");
    realtime.innerHTML = output;
}

setInterval(updateTime, 1000);