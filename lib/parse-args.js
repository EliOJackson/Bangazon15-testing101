// This parse-args file should export a single function to parse your command line arguments. The function should accept an array containing the arguments passed on the command line. Convert these arguments to an object with a count and sides property.

"use strict";

module.exports = (args) => {
    if (args[0] === undefined){
        return {
            "count" : 1,
            "sides" : 6
        }
    } else if (args[1] === undefined){
        return {
            "count" : 1,
            "sides" : args[0]
        }
    } else { 
        return {
            "count" : args[0],
            "sides" : args[1]
        }
    }
}

    