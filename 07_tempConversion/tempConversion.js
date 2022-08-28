const ftoc = function(temp) {
  const tempCel = (temp - 32) * 5/9;
  return Math.round(tempCel * 10) / 10;
};

const ctof = function(temp) {
  const tempFeh = (temp * 9/5) + 32;
  return Math.round(tempFeh * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


console.log(ftoc(32));
console.log(ftoc(100));
console.log(ctof(0));
console.log(ctof(73.2));