// API proxy (make HTTP calls for my app)

export function getUsers() {
  return fetch("http://localhost:3001/users").then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}

export function deleteUser(userId) {
  return fetch("http://localhost:3001/users/" + userId, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}

export function addUser(user) {
  return fetch("http://localhost:3001/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}

export function editUser(user) {
  return fetch("http://localhost:3001/users/" + user.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}
