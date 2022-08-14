const repeatString = function(str, num) {
    let results = '';
    if(parseInt(num) < 0)  return 'ERROR';
    for(let i = 0; i < num; i++) {
        results += str
    }
    return results;
};

// Do not edit below this line
module.exports = repeatString;
