const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", trigger);

form.addEventListener("click", trigger);

button.addEventListener("click", trigger);

function trigger(event) {
  alert("currentTarget = " +  event.currentTarget.tagName + " target = " + event.target.tagName);
}
