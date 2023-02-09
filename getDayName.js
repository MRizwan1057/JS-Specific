$(document).ready(function () {
  // business logic

  var event = new Date();
  var options = { weekday: "long" };
  alert(event.toLocaleDateString(undefined, options));

  // var dayName = days[new Date("2023", "02", "09").getDay()];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayName = days[new Date().getDay()];
  alert(dayName);
});
