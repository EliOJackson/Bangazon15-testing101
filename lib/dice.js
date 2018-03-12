// The dice file should export an object with at least two methods called roll and toDiceNotation.The toDiceNotation method should accept an object with a sides and count property and convert it to a String with the dice notation i.e. "1d6" or "2d40".The roll method should accept a dice notation String and produce a random Number which is the result of the dice roll.
"use strict";

const { randomInt } = require("./math.js");
 
const toDiceNotation = ({count, sides}) => {
    return `${count.toString()}d${sides.toString()}`
}

const roll = (toDiceNotation) => {
    // let low = +toDiceNotation.slice(0, toDiceNotation.indexOf('d'));
    // let high = +toDiceNotation.slice(toDiceNotation.indexOf('d')+1);
    let [rollCount, sides] = toDiceNotation.split("d");
    let diceTotal =0;

    for (let i = 0; i< rollCount; i++){
        diceTotal += randomInt(1, sides);
    }
    return diceTotal;
}



module.exports = { toDiceNotation, roll };