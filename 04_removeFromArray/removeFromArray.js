const removeFromArray = function(...args) {
    const newArr = args.splice(0, 1)[0];

    return newArr.filter(item => !args.includes(item))
};

console.log(removeFromArray([1,2,3,4], 2,4,5));

// Do not edit below this line
module.exports = removeFromArray;
