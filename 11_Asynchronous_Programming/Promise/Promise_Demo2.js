let aPromise = new Promise((resolve, reject) => {
    console.log("initial");
    resolve();
    reject();
}).then(() => {
    throw new Error('Something failed');
    console.log("Do this");
}).then(() => {
    console.log(`Do this after whatever happened before`);
}).catch(() => {
    console.log("Do that");
});

