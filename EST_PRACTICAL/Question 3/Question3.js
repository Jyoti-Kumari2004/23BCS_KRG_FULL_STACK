const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data detached successfully");
  }, 2000);
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
