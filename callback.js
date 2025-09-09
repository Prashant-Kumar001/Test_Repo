// let users = [
//   { id: 1, name: "Alice", status: "active" },
//   { id: 2, name: "Bob", status: "inactive" },
//   { id: 3, name: "Charlie", status: "active" },
// ];

// function greet(id, callback) {
//   const user = users.find((user) => user.id === id);

//   if (callback) {
//     setTimeout(() => {
//       if (!user) return callback("User not found", null);
//       if (user.status !== "active")
//         return callback("User status does not match", null);
//       return callback(null, user);
//     }, 1000);
//     return;
//   }

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!user) return reject("User not found");
//       if (user.status !== "active") return reject("User status does not match");
//       return resolve(user);
//     }, 1000);
//   });
// }

// const iAmCallBack = (err, data) => {
//   console.log("i m callback function");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// };

// greet(1, iAmCallBack);

// const getData = async () => {
//   try {
//     await greet(1, iAmCallBack);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getData();

const function2 = (name, timer = 1000, retuneFallback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve("success");
      } else {
        retuneFallback(name);
        reject(random);
      }
    }, timer);
  });
};

const giveExecution = (name) => {
  console.log("failed function", name);
}

const Promise1 = async (attempt = 1) => {
  try {
    console.log(`Attempt ${attempt}`);
    const data1 = await function2("promise1", 1000, giveExecution);
    const data2 = await function2("promise2", 1000, giveExecution);
    const data3 = await function2("promise3", 1000, giveExecution);
    const data4 = await function2("promise4", 1000, giveExecution);
    const data5 = await function2("promise5", 1000, giveExecution);
    console.log("Success:", data1, data2, data3, data4, data5);
  } catch (error) {
    console.log("Error:", error);
    if (attempt < 3) {
      setTimeout(() => Promise1(attempt + 1), 2000); 
    } else {
      console.log("Failed after 3 attempts");
    }
  }
};


Promise1();
