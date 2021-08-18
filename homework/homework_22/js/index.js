const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = parseInt(Math.random() * (6 - 1) + 1);
        if ( 1 <= number && number <= 5) {
            console.log("Start the game...");
            resolve(number);
        } else {
            reject('Exit')
        }
    }, 2000);
})
promise1
    .then((value) => {
        if (value === 1) {
            console.log('Stay here');
        } else {
            console.log('Go ' + value + ' steps');
        }
    })
    .catch(err => { console.log(err) });


