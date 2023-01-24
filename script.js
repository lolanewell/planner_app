// save reference to important DOM elements
// current time and date
var currentTimeDate = $('#time-display');

function displayTime() {
    var rightNow = moment().format("HH:mm:ss [on the] DD MMMM YYYY");
    currentTimeDate.text(rightNow);
}
setInterval(displayTime, 1000);

// change row colour as time passes in day
var timeblocks = $('.time');
var rowColour = $('.rowColour');

timeblocks.each(function() {
    var now = moment();
    var hour = $('data-hour');
    if (hour < now) {
        rowColour.css("background-color","red");
    } else if (hour == now) {
        rowColour.css("background-color", "green");
    } else {
        rowColour.css("background-color","grey");
    }
})



