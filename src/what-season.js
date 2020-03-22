const FALL = ['Sep', 'Oct', 'Nov']
const WINTER = ['Dec', 'Jan', 'Feb']
const SPRING = ['Mar', 'Apr', 'May']
const SUMMER = ['Jun', 'Jul', 'Aug']

module.exports = function getSeason(date) {
  if (typeof date === 'undefined' ) return 'Unable to determine the time of year!'
  if(!(date instanceof Date)) throw new Error()
  let season = date.toDateString().split(' ')[1]
  if(FALL.includes(season)) return 'fall';
  if(WINTER.includes(season)) return 'winter';
  if(SPRING.includes(season)) return 'spring'
  if(SUMMER.includes(season)) return 'summer'
};