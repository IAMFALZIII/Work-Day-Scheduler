var date = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(date);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeTracker() { 
        var $time2 = moment().format('dddd');
    
        $(".time-block").each(function () {
            var block = parseFloat($(this).attr("id").split("")[1]);
    
            if (block < $time2) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (block === $time2) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    
    $("#hour-9 .description").val(localStorage.getItem("9 AM"));
    $("#hour-10 .description").val(localStorage.getItem("10 AM"));
    $("#hour-11 .description").val(localStorage.getItem("11 AM"));
    $("#hour-12 .description").val(localStorage.getItem("12 PM"));
    $("#hour-13 .description").val(localStorage.getItem("1 PM"));
    $("#hour-14 .description").val(localStorage.getItem("2 PM"));
    $("#hour-15 .description").val(localStorage.getItem("3 PM"));
    $("#hour-16 .description").val(localStorage.getItem("4 PM"));
    $("#hour-17 .description").val(localStorage.getItem("5 PM"));
    
    timeTracker();
})