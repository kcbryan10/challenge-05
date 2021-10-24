//using moment to display date and time
window.setInterval(function () {
    $("#currentDay").html(moment().format('ddd MMMM DD Y  H:mm:ss'))
}, 1000);

$(document).ready(function(){

    //save task to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })


    //get items from local storage and display on page 
    $("#hr-9 .time-block").val(localStorage.getItem("09"));
    $("#hr-10 .time-block").val(localStorage.getItem("10"));
    $("#hr-11 .time-block").val(localStorage.getItem("11"));
    $("#hr-12 .time-block").val(localStorage.getItem("12"));
    $("#hr-13 .time-block").val(localStorage.getItem("13"));
    $("#hr-14 .time-block").val(localStorage.getItem("14"));
    $("#hr-15 .time-block").val(localStorage.getItem("15"));
    $("#hr-16 .time-block").val(localStorage.getItem("16"));
    $("#hr-17 .time-block").val(localStorage.getItem("17"));
});
