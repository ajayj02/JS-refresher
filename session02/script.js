const cart = [
  "macbook",
  "running shorts",
  "notebook",
  "cover bag",
  "HDMI adaptor",
];

const promise = createOrder(cart);

promise.then(function (orderID) {
  console.log(orderID);
})
.catch(function(err) {
    console.log(err.message)
});

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const error = new Error("cart is not valid");
      reject(error);
    }

    const orderID = 12323;
    if (orderID) {
      setTimeout(function () {
        resolve(orderID);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}
