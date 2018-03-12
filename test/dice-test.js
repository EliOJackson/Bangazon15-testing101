
const { roll, toDiceNotation } = require('../lib/dice')
const { assert: { isFunction, isNotNaN, isString, include } } = require('chai');

describe('dice module', () => {
    describe('roll', () => {
        it('should be a function', () => {
            isFunction(roll);
        })
        it('should return a number', () => {
            isNotNaN(roll("2d20"));
        });
    });
    describe('toDiceNotation', () => {
        let obj = {
            "count": 1,
            "sides": 6
        };
        it('should return a string', () => {
            isString(toDiceNotation(obj));
        })
        it('should contain the letter d', () =>{
            include(toDiceNotation(obj), "d")
            console.log(toDiceNotation(obj));
        })
    });
});
 