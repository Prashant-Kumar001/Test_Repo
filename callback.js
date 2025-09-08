let users = [
  { id: 1, name: "Alice", status: "active" },
  { id: 2, name: "Bob", status: "inactive" },
  { id: 3, name: "Charlie", status: "active" },
];

function greet(id, status, callback) {
  return function () {
    const user = users.find((user) => user.id === id);

    if (user) {
      if (user.status === status) {
        return callback(user, null);
      } else {
        return callback(null, "User status does not match");
      }
    } else {
      return callback(null, "User not found");
    }
  };
}

function callback(result, error) {
  if (result) {
    return result;
  } else {
    return error;
  }
}

const fun = greet(3, "active", callback);
console.log(fun);


