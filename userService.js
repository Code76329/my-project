export function getUsers(users) {
  return users;
}
export function addUser(users, newUser) {
  users.push(newUser);
  return users;
}
export function deleteUser(users, userId) {
  const index = users.findIndex((user) => user.id === userId);  
  if (index !== -1) {
    users.splice(index, 1);
  }
  return users;
}