var dayOfTheWeek = {};

dayOfTheWeek.calculate = function (day, month, year) {
  console.log(month, day, year)
  if (month === 1 || month === 2) {year--; month += 12;}
  var K = year % 100;
  var m = month;
  var q = day;
  var J = Math.floor(year/100);
  return (q + Math.floor((13*(m + 1))/5) + K + Math.floor(K/4) + Math.floor(J/4) + 5*J) % 7;
};

module.exports = dayOfTheWeek;
