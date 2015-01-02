function displayTime () {
    // get current time
    var current_time = new Date();
    var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var dayOfWeek = weekday[current_time.getDay()];
    var y = current_time.getFullYear();
    var mo = current_time.getMonth() + 1;
    var d = current_time.getDate();
    var h = current_time.getHours();
    var m = current_time.getMinutes();
    var s = current_time.getSeconds();
    var meridiem = "AM";    
    if (h > 12) {
        h = h - 12;
        meridiem = "PM";
    }

   if (h == 0) {
       h = 12;
   }

   if (s < 10) {
       s = "0" + s;
   }

   var clock_div = document.getElementById("clock");
   clock_div.innerHTML = dayOfWeek + "<br>" + d + "/" + mo + "/" + y + "<br>" + h + ":" + m + ":" + s + " " + meridiem;
}
window.onload = function() {
    setInterval(displayTime, 1000);  
};