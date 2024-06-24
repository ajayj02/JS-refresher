/*
Debouncing code snippet

let counter = 0;
function getData() {
  // calls an API and gets Data
  console.log("fetching data..", counter++);
}

function newFn(fn, d) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(()=>{
        fn()
    }, d);
  };
}

const debouncedFn = newFn(getData, 800);

*/

//Throttling

