// helloWorld function
function isAnythingButAString(input){
    return !isNaN(parseFloat(input)) || input === null || typeof input === "boolean" || input === "";
}


function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (isAnythingButAString(input)) {
        return ("Hello, World!");
    } else {
        return (`Hello, ${input}!`);
    }
}

