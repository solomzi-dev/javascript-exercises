const sumAll = function(a, b) {
    let sum = 0;
    if(isNaN(a) || isNaN(b)) return 'ERROR';
    if(typeof a === 'string' || typeof b === 'string') return 'ERROR';
    if(a < 0 || b < 0) return 'ERROR';
    if(a > b) {
        let diff = a - b;
        sum = a + b;
        for (let i = 1; i < diff; i++) {
            sum = sum + b + i;
        }
        return sum;
    }  else if(b > a) {
        let diff = b - a;
        sum = a + b;
        for (let i = 1; i < diff; i++) {
            sum = sum + a + i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
