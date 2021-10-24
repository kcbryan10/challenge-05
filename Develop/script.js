//using moment to display date and time
window.setInterval(function () {
    $("#currentDay").html(moment().format('ddd MMMM DD Y  H:mm:ss'))
}, 1000);

$(document).ready(function(){

    //save task to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".content-input").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    // Highlight column in relation to time
    var timeHighlight= function(){
        var currentTime = moment().hour();

        $(".content-input").each(function(){
            var columnTime = $(this).parent().attr("id");

            if (columnTime < currentTime){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (columnTime == currentTime){
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })

     }

    //get items from local storage and display on page 
    $("#9 .content-input").val(localStorage.getItem("9"));
    $("#10 .content-input").val(localStorage.getItem("10"));
    $("#11 .content-input").val(localStorage.getItem("11"));
    $("#12 .content-input").val(localStorage.getItem("12"));
    $("#13 .content-input").val(localStorage.getItem("13"));
    $("#14 .content-input").val(localStorage.getItem("14"));
    $("#15 .content-input").val(localStorage.getItem("15"));
    $("#16 .content-input").val(localStorage.getItem("16"));
    $("#17 .content-input").val(localStorage.getItem("17"));

    timeHighlight();
});
