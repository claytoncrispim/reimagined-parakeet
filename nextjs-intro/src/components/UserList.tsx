// // Approach by creating a User Type that describes the user object from the API
// type User = {
//     id: number;
//     name: string;
// };

// // Defining an async function directly for the component
// async function UserList() {
//     // 1. Fetch data directly on the server side
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users =  await response.json(); // Parsing the JSON response

//     return (
//         <div>
//             <h2 className="text-xl font-semibold mt-4">Users</h2>
//             <ul>
//                 {/* 2. Map over the data and reder it. 
//                     1st approach by telling map() that user is "any"
//                     2nd approach by telling map() that user is a User*/}
//                 {users.map((user: any) => ( // 1st approach
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//                 <br></br>
//                 {users.map((user: User) => ( // 2nd approach. Added user.id to see difference
//                     <li key={user.id}>{user.id} - {user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


// import Link from "next/link"; // 1. Importing the Link component
// //import { User } from "@/types"; // 2. Importing the shared User type
// import { getUsers } from "@/lib/data"; // 3. Importing the getUsers new function

// // // Define a simplified User
// // type User = {
// //     id: number;
// //     name: string;
// // };

// async function UserList() {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // // 2. Tell TypeScript that the fetched data will be an ARRAY of User objects
//     // const users : User[] = await response.json();

//     // 2. Fetch users from our local data source instead of the external API
//     const users = await getUsers();

//     return (
//         <div>
//             <h2 className="text-xl font-semibold mt-4">Users</h2>
//             <ul>
//                 {/* 3. We no longer need to type 'user' here, as TypeScript infers it from the 'users' constant */}
//                 {/* {users.map((user: User) => ( */}
//                 {users.map((user) => (
//                     <li key={user.id}>
//                         {/* 4. Wrapping the user's name in a Link component */}
//                         <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
//                             {user.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default UserList;



/**
 * Date: 1st September 2025
 * What We Improved
 * 1. We replaced the local type definition with an import from our central types file.
 * 2.We typed the users constant as User[], which means "an array of User objects."
 * 3.Because TypeScript now knows users is an array of User objects, it can automatically infer that the 'user' variable inside the .map() is
 * also a User. This makes our code a little cleaner.
 */

/**
 * Date: 2nd September 2025
 * What We Improved
 * 1. We created a new function getUsers in src/lib/data.ts to encapsulate the logic of fetching users.
 * 2. We replaced the direct fetch call in UserList with a call to getUsers, making our component cleaner and separating concerns.
 * 3. This setup allows us to easily modify the data source in one place (the getUsers function) without changing the component logic.
 */

"use client";

import Link from 'next/link';
import type { User } from '@/types';

// This is the key line. It defines that the component accepts a 'users' prop.
export default function UserList({ users }: { users: User[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-4">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}