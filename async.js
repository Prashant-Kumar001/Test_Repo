function promise(msg, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), delay);
  });
}

// const main = async () => {
//   console.log("starting");

//   const result1 = await promise("first success", 1000);
//   console.log("middle 1");
//   console.log(result1);

//   const result2 = await promise("second success", 1000);
//   console.log("middle 2");
//   console.log(result2);

//   console.log("ending");
// };

// main();


console.log("starting");

promise("first success", 1000)
  .then((result1) => {
    console.log("middle 1");
    console.log(result1);
    return promise("second success", 1000);
  })
  .then((result2) => {
    console.log("middle 2");
    console.log(result2);
    console.log("ending");
  });

console.log("outside end");