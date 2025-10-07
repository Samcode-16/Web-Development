function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    });
}

function step4() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 4 completed");
            resolve();
        }, 1000)
    });
}

// step1()
//     .then(step2)
//     .then(step3)
//     .then(step4)
//     .then(() => console.log("All steps completed"));

async function processSteps() {          
    await step1();
    await step2();
    await step3();
    console.log("All steps completed");
}

processSteps();