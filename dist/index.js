"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overallBand = void 0;
const overallBand = (listening, reading, writing, speaking) => {
    // overall calculating
    let calc = (listening + reading + writing + speaking) / 4;
    // getting residual
    let residual = calc - Math.trunc(calc);
    //conditional checking
    if (residual === 0) {
        return calc;
    }
    else if (residual >= 0.25 && residual < 0.75) {
        return `${Math.floor(calc)}.5`;
    }
    else if (residual <= 0.25) {
        return Math.floor(calc);
    }
    else if (residual >= 0.75) {
        return Math.ceil(calc);
    }
};
exports.overallBand = overallBand;
