import {
    getUsers,
    addUser,
    deleteUser
} from "./userService.js";
import fs from "node:fs/promises";
const data = await fs.readFile("./users.json", "utf-8");
const users = JSON.parse(data);
const usersall = getUsers(users);
console.log("All Users:", usersall);
const newUser = addUser(users, { id: 3, name: "Alice" });
console.log ("After Adding User:", newUser);

const updatedUsers = deleteUser(users, 2);
console.log("After Deleting User:", updatedUsers);
