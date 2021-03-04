
exports.min = function min (array) {
  if (typeof array === undefined || !array || array.length === 0 ) return 0;
  //if (array === undefined) return 0;
  return Math.min(...array) 



  return 0;
}

exports.max = function max (array) {
  if (typeof array === undefined || !array || array.length === 0 ) return 0;
  return Math.max(...array)
}

exports.avg = function avg (array) {
  if (typeof array == undefined || !array || array.length === 0 ) return 0;
  let sum = 0; 
  array.forEach(function(item) {
  sum += item;
  });
  return sum / array.length; 
}
