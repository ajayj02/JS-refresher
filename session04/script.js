// // const promise = new Promise((resolve, reject) => {
// //   resolve("promise resolved");
// // });

// // //always returns a promise
// // async function getData() {
// //   return promise;
// // }

// // const dataPromise = getData();
// // dataPromise.then((res) => console.log(res));

// // //using async await

// // const newPromise = new Promise((resolve, reject) => {
// //   resolve("Promise resolved using async await");
// // });

// // async function handlePromise() {
// //   const value = await newPromise;
// //   console.log(value);
// // }

// // handlePromise();

// //diff b/w async await and normal promise resolving
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 promise is resolved");
//   }, 5000);
// });

// // function handleP1() {
// //     p1.then((res)=> console.log(res))
// //     console.log("Hii There")
// // }

// // handleP1();

// //in this case the code below p1.then will execute first and then when p1 will resolve it will execute

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2 promise is resolved");
//   }, 5000);
// });

// async function handlePromises() {
//   const val1 = await p1;
//   console.log(val1);

//   console.log("Hii There");

//   const val2 = await p2;
//   console.log(val2);
//   console.log("Promise ends");
// }

// handlePromises();

// console.log("Jai hind");

// //while using async await first the promise will get resolve and then rest of the code will run.

const GITHUB_API = "https://api.github.com/users/ajayj02";

async function apiCall() {
  const data = await fetch(GITHUB_API); //this will be a promise
  const result = await data.json();

  console.log(result.bio);
}

apiCall();


//error handling in async await.