const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Data();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

data.innerHTML = (today.getData() < 10 ? "0" : "") + today.getData();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getYear();
