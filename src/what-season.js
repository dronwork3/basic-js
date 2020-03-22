module.exports = function getSeason(date = "123") {
  if (date == "123") { return "Unable to determine the time of year!" }
  if (typeof (date) != "object" || date.constructor !== Date || date.hasOwnProperty('toString')) { throw Error; } else {
    let d = date.getMonth();
    if (d == 11 || d <= 1) { return "winter" }
    else if (d <= 4) { return "spring" }
    else if (d <= 7) { return "summer" }
    else { return "autumn" }
  }
};
