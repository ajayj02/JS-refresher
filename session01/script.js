/*
Promises: It is an object respresenting the eventual completion of an async operation.

callbacks have issue like callback hell and inversion of control using promises we erdicate those drawbacks.
*/

const GITHUB_API = "https://api.github.com/users/ajayj021";

const user = fetch(GITHUB_API);

user.then((x) => {
  console.log(x.status);
});
