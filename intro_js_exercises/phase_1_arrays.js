
Array.prototype.uniq = function() {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if (result.includes(this[i]) === false) {
            result.push(this[i]); 
        }
    }
    return result;
}

Array.prototype.twoSum = function() {
    let result = [];
    for(let i=0; i<this.length-1; i++) {
        for(let j=i+1; j<this.length; j++) {
            if (this[i]+this[j] === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

Array.prototype.transpose = function() {
    let result = [];
    for(let columns=0; columns<this.length; columns++){
        let row = [];
        for(let rows=0; rows<this.length; rows++){
            row.push(this[rows][columns]);
        }
        result.push(row);
    }
    return result;
}

