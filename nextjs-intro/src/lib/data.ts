import type { User } from "@/types";
import fs from 'fs/promises'; // Node.js File System module
import path from 'path'; // Node.js Path module

// Get the path to our JSON file
const filePath = path.join(process.cwd(), 'users.json');

// --- All our data functions will now read from/write to the file ---

export const getUsers = async (): Promise<User[]> => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist, return an empty array
    return [];
  }
};

export const getUserById = async (id: number): Promise<User | undefined> => {
  const users = await getUsers();
  return users.find(user => user.id === id);
};

export const addUser = async (newUser: { name: string; email: string; phone: string; website: string }) => {
  const users = await getUsers();
  // In a real app, this would insert into a database. Here, we'll just add to our "users" array.
  // The line bellow is a clever way to make sure every new user gets a unique ID number.
  // 1. First, it checks: "Are there any users in our list already?" (users.length > 0).
  // 2. If YES ✅: It finds the highest existing ID and adds 1 to it.
  // 2.1 users.map(u => u.id) creates a temporary list of just the ID numbers (e.g., [1, 2]).
  // 2.2 Math.max(...) finds the highest number in that list (e.g., 2).
  // 2.3 + 1 gives us the next ID (e.g., 3).
  // 3. If NO ❌: It starts with ID number 1.
  // This way, every user gets a unique ID, even if we delete some users later.
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const userWithId: User = { 
    id: newId, 
    name: newUser.name, 
    email: newUser.email, 
    phone: newUser.phone || '', 
    website: newUser.website || ''
  };
  
  const updatedUsers = [...users, userWithId];
  
  // Write the entire updated array back to the file
  await fs.writeFile(filePath, JSON.stringify(updatedUsers, null, 2));
  
  return userWithId;
};