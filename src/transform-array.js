module.exports = function transform(arr) {
    let result = [];
    if (Object.prototype.toString.call(arr) != '[object Array]') throw new Error;
        if(!arr.length) {
            return arr;
        }
        for( let i = 0; i < arr.length; i++){
            if (arr[i] == '--double-next'){
                if(arr.length - 1 > i){
                    result.push(arr[i + 1]);	
                } 
            } else if( arr[i] == '--double-prev'){
                if(i > 0){
                    result.push(arr[i - 1]);
                } 
            } else if ( arr[i] == '--discard-prev'){
                if( i > 0){
                    result.pop();
                }
            } else if ( arr[i] == '--discard-next'){
                if(arr.length - 1 > i){
                    i++
                }
            } else {
                result.push(arr[i]);
            }
        }
        return result;
};
