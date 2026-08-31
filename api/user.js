export const users = [
  {
    "username": "admin",
    "password": "admin"
  },
  {
    "username": "admin",
    "password": "admin221"
  }
];

export function validateLogin(username, password) {
  return users.some(user => 
    user.username === username && user.password === password
  );
}
