function counterGenerator () {
    let counter = 0;
    function counterFunc () {
        let innerCounter = 0;
        console.log("Inner Counter : " + (++innerCounter));
        return counter += 1
    }
    return counterFunc;
}

const hilmi = counterGenerator();
console.log("Counter : ",hilmi())
console.log("Counter : ",hilmi())

