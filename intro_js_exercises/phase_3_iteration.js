Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for(let i=0; i<this.length-1; i++){
            if (this[i] > this[i+1]){
                let temp = this[i+1];
                this[i+1] = this[i];
                this[i] = temp;
                sorted = false;
            }
        }
    }
    return this;
};

String.prototype.substrings = function() {
    let result = [];
    for(let i=0; i<this.length; i++){
        for(let j=i; j<this.length; j++){
            result.push(this.slice(i, j+1));
        }
    }
    return result;
};