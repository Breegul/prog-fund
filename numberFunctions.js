function getBigger(a, b){
    return Math.max(a, b);
}

function getSmallest(arr){
    if(Array.isArray(arr) ===false || arr.length ===0){
        return null;
    }

    let min = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

function countValue(arr, val){
    if(typeof val === "undefined"){return null;}
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if (arr[i] === val){
            count++;
        }
    }
    return count;
}

module.exports = {getBigger, getSmallest, countValue}