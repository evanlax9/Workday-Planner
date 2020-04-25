$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  $(".saveBtn").on("click", function () {
    var plansValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, plansValue);
    console.log(plansValue);
  });
  var currentHour = moment().hour();

  function hourUpdate() {
    $(".time-block").each(function () {
      var newHour = parseInt($(this).attr("id").split("-")[0]);
      if (currentHour > newHour) {
        $(this).addClass("past");


      }
      else if (currentHour === newHour) {
        $(this).addClass("present")
        $(this).removeClass("past")
      }

      else if (currentHour < newHour) {
        $(this).addClass("future");
        $(this).removeClass("present")
        $(this).removeClass("past")


      }


    })
  }
  hourUpdate();

  $("#9-Am .description").val(localStorage.getItem("9-Am"));
  $("#10-Am .description").val(localStorage.getItem("10-Am"));
  $("#11-Am .description").val(localStorage.getItem("11-Am"));
  $("#12-Pm .description").val(localStorage.getItem("12-Pm"));
  $("#13-Pm .description").val(localStorage.getItem("13-Pm"));
  $("#14-Pm .description").val(localStorage.getItem("14-Pm"));
  $("#15-Pm .description").val(localStorage.getItem("15-Pm"));
  $("#16-Pm .description").val(localStorage.getItem("16-Pm"));
  $("#17-Pm .description").val(localStorage.getItem("17-Pm"));

  if (currentHour > 15) {
    localStorage.clear();
  }


});


// Use moment to get today's date
// format should be [DAY OF WEEK], [Full Month] [DAYOFMONTH ex 3rd]
// Use moment to get current time (hours) and compare to 9AM-5PM hardcoded
// Compare the time you get to the 9AM-5PM
// highlight those before the hour grey
// highlight current hour red
// highlight after hour green
// add or remove classes with jQuery
// possibly generate the blocks, everything before current hour, give a grey class
// current hour gets red class
// after current hour gets green
// Saving stuff
// correlate what you save to the date it was saved
// on initial load, get today's date, compare with what's in local storage, and save that in localstorage
// when to wipe the events (when the date in localstorage is different from today's date)-->
