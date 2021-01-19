
exports.min = function min (array) {
    if (!array || array.length===0) return 0;
    let sorted = array.slice().sort((a, b) => a - b)
    let minVal = sorted[0];
    return minVal;
}

exports.max = function max (array) {
    if (!array || array.length===0) return 0;
    let sorted = array.slice().sort((a, b) => a - b)
    let maxVal = sorted[array.length-1];
    return maxVal
}

exports.avg = function avg (array) {
    if(!array || array.length===0) return 0;
    const sum= array.reduce((a, b) => a + b);
    return sum/array.length;
}
