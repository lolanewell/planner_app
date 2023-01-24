// save reference to important DOM elements
// current time and date
/*var currentTimeDate = $('#time-display');

function displayTime() {
    var rightNow = moment().format("HH:mm:ss [on the] DD MMMM YYYY");
    currentTimeDate.text(rightNow);
}
setInterval(displayTime, 1000);
*/
var timeblocks = $('.time');
var row = $()

timeblocks.each(function() {
    var now = moment();
    var hour = $('data-hour');
    if (hour < now) {
        row.css("background-color","red");
    } else if (hour == now) {
        row.css("background-color", "green");
    } else {
        row.css("background-color","gray");
    }
})


