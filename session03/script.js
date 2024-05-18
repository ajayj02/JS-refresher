const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 1 has run successfully"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 has run unsuccessfully"), 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 has run successfully"), 3000);
});

Promise.any([promise1, promise2, promise3]).then((res) => {
  console.log(res);
}).catch((err)=> {
    console.log(err); // this will give a single error statement
    console.log(err.errors); //will give the array of errors for each failed promise
});
