async function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async function 1');
            resolve();
        }, 3000);
    });
}
async function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async function 2');
            resolve();
        }, 2000);
    });
}
async function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async function 3');
            resolve();
        }, 1000);
    });
}

async function doThings() {
    await asyncFunc1();
    await asyncFunc2();
    await asyncFunc3();
    return "All done";
}

doThings().then(console.log);
