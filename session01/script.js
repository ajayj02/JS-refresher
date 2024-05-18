/*
Promises: It is an object respresenting the eventual completion of an async operation.

callbacks have issue like callback hell and inversion of control using promises we erdicate those drawbacks.
Promises gives us gaurentee to give the result. It has three states resolve, reject and pending. 
Promises only resolves once. And they are immutable.
We need to return data from each promise when we do promise chaining to pass it further.
*/

const GITHUB_API = "https://api.github.com/users/ajayj021";

const user = fetch(GITHUB_API);

user.then((x) => {
  console.log(x.status);
});
