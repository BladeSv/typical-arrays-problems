
exports.min = function min (array) {
    if(!array || !array.length){return 0;}
    return array.reduce(((min,el)=>el>min?min:el),array[0]);
}

exports.max = function max (array) {
    if(!array|| !array.length){return 0;}
   return array.reduce(((max,el)=>el<max?max:el),array[0]);
}

exports.avg = function avg (array) {
    if(!array|| !array.length){return 0;}
    return array.reduce(((acc,el)=>acc+el),0)/array.length
}
