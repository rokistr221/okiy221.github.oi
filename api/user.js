export const users = [
  {
    "username": "admin",
    "password": "admin"
  },
  {
    "username": "risky",
    "password": "4444"
  }
];

export function validateLogin(username, password) {
  return users.some(user => 
    user.username === username && user.password === password
  );
}
