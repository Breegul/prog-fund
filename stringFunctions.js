function getLonger(a, b){
    if (typeof a === "undefined" || typeof b === "undefined"){
        throw Error("This function requires two arguments!");
    }
    if(typeof a != "string" || typeof b != "string"){
        throw Error("Arguments must be strings!");
    }

    if(a.length > b.length){
        return a;
    } else {
        return b;
    }
}

function greet(str){
    if(str==="" || typeof str === "undefined"){
        return "Hi!";
    }
    return `Hello, ${str}!`;
}

function isSubstring(str, substr){
    if(typeof str === "undefined" || typeof substr === "undefined"){
        throw Error("This function requires two arguments!");
    }
    if(typeof str != "string" || typeof substr != "string"){
        throw Error("Arguments must be strings!");
    }
    if(str.length===0){
        throw Error("Arguments must have a length greater than zero!");
    }

    return str.includes(substr);

}

module.exports = {getLonger, greet, isSubstring}