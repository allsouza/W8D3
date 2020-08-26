function range(start, end) {
    // debugger
    let result = [];
    if (start === end) {
        return start;
    }
    if (start < end) {
        res =(range(start + 1, end));
        result.push(res);
    };
    return result;
}   

function range2(start,end) {
    let result = [];
    for(i=start; i<=end; i++){
        result.push(i);
    }
    return result;
}

function sumRec(array){
    if (array.length < 2) return array[0];
    return array[0] + sumRec(array.slice(1,array.length));
}

function exponent(base, exp) {
    if (exp === 0) return 1;
    return base * exponent(base, exp - 1);
}