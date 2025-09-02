// "use client"; // This page is a Client Component because it uses Client Components inside

// import { useState, useEffect } from "react";
// import type { User } from "@/types";
// import UserList from "@/components/UserList";
// import Counter from "@/components/Counter";
// import AddUserForm from "@/components/AddUserForm";

// export default function HomePage() {
//   return (
//     <main className="p-8">
//       <h1 className="text-2xl font-bold">Next.js Intro</h1>
//       <AddUserForm /> {/* Previously a Client Component with Server Action, now just a Client Component */}
//       <UserList /> {/* Previously a Server Component, now a Client Component */}
//       <Counter />  {/* Client Component */}  
//     </main>
//   );
// }

"use client"; // The whole page is now a Client Component

import { useState, useEffect } from 'react';
import type { User } from '@/types';
import UserList from '@/components/UserList';
import Counter from '@/components/Counter';
import AddUserForm from '@/components/AddUserForm';

export default function HomePage() {
  // 1. State for the user list lives here
  const [users, setUsers] = useState<User[]>([]);

  // 2. Function to fetch/re-fetch users
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  // 3. Fetch the initial data when the page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Intro</h1>
      
      {/* 4. Pass the fetchUsers function down to the form */}
      <AddUserForm onUserAdded={fetchUsers} />
      
      <Counter />
      
      {/* 5. Pass the users state down to the list */}
      <UserList users={users} />
    </main>
  );
}