
const parseArgs = require('../lib/parse-args.js')
const { assert: { isFunction, isNotNaN, isString, isObject, deepEqual } } = require('chai');

describe('parse-args module', () => {
    let args = [1, 6];
    describe('module.exports', () => {
        it('should be a function lol', () => {
            isFunction(parseArgs);
        });
        it('should return an object', () => {
            isObject(parseArgs(args));
        })
        it('should return an object of 1 and 6 if no arguments are provided', () => {
            args = [];
            deepEqual(parseArgs(args), {"count": 1, "sides": 6});
            })
        })
})
