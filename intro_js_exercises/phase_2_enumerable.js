Array.prototype.myEach = function(callback) {
    for( let i = 0; i < this.length; i++ ) {
        callback(this[i]);
    }
    return this;   
}

Array.prototype.myMap = function(callback) {
    let result = [];
    this.myEach(
        function(ele) {
            result.push(callback(ele));
        }
    )
    return result;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue || this.shift();

    this.myEach(
        function(ele) {
         acc = callback(ele, acc);
    });
    return acc;
}

