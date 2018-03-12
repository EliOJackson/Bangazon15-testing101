// The math file should export an Object with a method called randomInt that accepts two arguments, a lower bound and an upper bound. This function should return a random integer inclusive of the lower bound and the upper bound.

"use strict";

module.exports.randomInt = (low, high) => {
        low = Math.ceil(low);
        high = Math.floor(high);
        return Math.floor(Math.random() * (high - low + 1)) + low; //The maximum is inclusive and the minimum is inclusive 
        }


// console.log(module.exports.randomInt.random(1,6));