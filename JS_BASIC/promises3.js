const isRequestSuccessful = true;
const db = [
    {id: 1, name: "Samudyatha"},
    {id: 2, name: "Samanvitha"}
];

let promise = new Promise((resolve, reject) => {
    if (isRequestSuccessful) {
        setTimeout(() => resolve(db, 8000));
    } else {
        const error = new Error("Something went wrong!");
        reject(error.message);
    }
});

promise
    .then((response) => console.log(response))
    .catch(function(err) {
        console.log(err);
    });