// async await

// async function returnSomething(){  //when u write async infront of a function, return's a promise
//     return "Sam";
// }

async function showSomeResponse() {
    let promise = new Promise(res => res("done done"));
    return promise;
}

// const result = returnSomething();
// console.log(result);

const promise = showSomeResponse();
promise.then((res) => console.log(res));
