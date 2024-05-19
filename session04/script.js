// const promise = new Promise((resolve, reject) => {
//   resolve("promise resolved");
// });

// //always returns a promise
// async function getData() {
//   return promise;
// }

// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

// //using async await

// const newPromise = new Promise((resolve, reject) => {
//   resolve("Promise resolved using async await");
// });

// async function handlePromise() {
//   const value = await newPromise;
//   console.log(value);
// }

// handlePromise();


//diff b/w async await and normal promise resolving
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 promise is resolved");
//   }, 5000);
// });

// function handleP1() {
//     p1.then((res)=> console.log(res))
//     console.log("Hii There")
// }

// handleP1();

//in this case the code below p1.then will execute first and then when p1 will resolve it will execute

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P2 promise is resolved");
    }, 5000);
  });
  
async function handleP2() {
      const val = await p2;
      console.log(val);
      console.log("Hii There")
  }
  
  handleP2();

  //while using async await first the promise will get resolve and then rest of the code will run.
  