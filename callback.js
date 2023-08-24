// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function () {
//   console.log("y");
// });

//callbackhell
const details = ["name", "email", "password"];

// function register(details, login) {
//   console.log("User details", details);
//   login(function () {
//     success(function () {
//       console.log("Successed");
//     });
//   });
// }
// function login(callabck) {
//   setTimeout(function () {
//     console.log("Login");
//     callabck();
//   }, 5000);
// }

// function success(callback) {
//   setTimeout(function () {
//     callback();
//   }, 0);
// }

// register(details, login);

//promise
// function register(details) {
//   console.log("User details inside promise", details);
//   return login
//     .then(success)
//     .then(function () {
//       console.log("Success inside promise");
//     })
//     .catch(function (error) {
//       console.log("Some error occurred:", error);
//     });
// }

// let login = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject("hii");
//     console.log("Login inside promise");
//   }, 1);
// });

// let success = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject("eoor"); // Reject the Promise with an error message
//   }, 9000);
// });

// const userDetails = ["John Doe", "john@example.com", "pa$$w0rd"];
// register(userDetails);

const p1 = () => {
  return new Promise((resolve, reject) => {
    console.log("P1");
    resolve();
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    console.log("P2");
    reject();
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    console.log("P3");
    resolve();
  });
};

p1()
  .then(() => {
    console.log("inside p1");
  })
  .catch(() => {
    console.log("error in p1");
  })
  .then(() => p2())
  .then(() => {
    console.log("inside p2");
  })
  .catch(() => {
    console.log("error in p2");
  })
  .then(() => p3())
  .then(() => {
    console.log("inside p3");
  })
  .catch(() => {
    console.log("error in p3");
  });
