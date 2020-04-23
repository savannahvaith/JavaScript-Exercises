// The old way! 
// Leads to classic pyramid of DOOOOOMMMM!!
doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log(`Got the final result ${finalResult}`);
        }, failureCallBack);
    }, failureCallBack);
}, failureCallBack);


// we attach our call backs to the returned promsie --> forms a promise
// Es5 version of js
doSomething()
    .then(function (result) {
        return doSomethingElse(result);
    }).then(function (newResult) {
        return doThirdThing(newResult);
    }).then(function (finalResult) {
        console.log(`got final result: ${finalResult}`);
        // When a promise REJECTS - or throws an error - it jumps to the first .catch()
        // call following the error and passes control to its function 
    }).catch(failureCallBack);


// ES6 - Expres with arrow functions
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => console.log(`got the final ressult ${finalResult}`))
    .catch(failureCallBack);

