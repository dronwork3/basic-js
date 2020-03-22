module.exports = function countCats(arr) {
  let catCount = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(typeof arr[i][j] === 'string') {
        if(arr[i][j].match(/\^/g) && !!arr[i][j].match(/^\^{2}$/g)){
          catCount++
        } else catCount += 0
      }else catCount += 0
    }}
  return catCount
}