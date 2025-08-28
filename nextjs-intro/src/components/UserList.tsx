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


import Link from "next/link"; // 1. Importing the Link component

type User = {
    id: number;
    name: string;
};

async function UserList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users : User[] = await response.json(); // Typing the users array

    return (
        <div>
            <h2 className="text-xl font-semibold mt-4">Users</h2>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>
                        {/* 2. Wrapping the user's name in a Link component */}
                        <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default UserList;