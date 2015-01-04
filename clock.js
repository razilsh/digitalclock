function displayTime () {
    // get current time
    var current_time = new Date();
    var weekday      = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var dayOfWeek    = weekday[current_time.getDay()];
    
    var year     = current_time.getFullYear();
    var month    = current_time.getMonth() + 1;
    var date     = current_time.getDate();
    var hours    = current_time.getHours();
    var minutes  = current_time.getMinutes();
    var seconds  = current_time.getSeconds();
    
    var meridiem = "AM";    
    
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }

   if (hours == 0) {
       hours = 12;
   }

   if (seconds < 10) {
       seconds = "0" + s;
   }

   var clock_div = document.getElementById("clock");
   clock_div.innerHTML = dayOfWeek + "<br>" + date + "/" + month + "/" + year +
                         "<br>" + hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

window.onload = function() {
    setInterval(displayTime, 1000);  
};