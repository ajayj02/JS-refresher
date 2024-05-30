const cart = [
  "macbook",
  "running shorts",
  "notebook",
  "cover bag",
  "HDMI adaptor",
];

createOrder(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .catch(function (err) {
    //Handling errors
    console.log(err.message);
  })
  .then(function (data) {
    return proceedtoPayment(data);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

//promise creation
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
      }, 1000);
    }
  });

  return pr;
}

function proceedtoPayment(orderID) {
  return new Promise((resolve, reject) => {
    resolve("Payment successful");
  });
}

function validateCart(cart) {
  return false;
}
