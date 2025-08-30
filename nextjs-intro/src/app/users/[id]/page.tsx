// // This page component receives 'params' which contains the dynamic parts of the URL
// async function UserDetailPage ({ params }: { params: { id: string}}) {
//     // 1. Fetch data for the specific user using the id from params
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`); // Fetch user data from an API
//     const user = await response.json(); // Parse the JSON response

//     // 2. Render the user details
//     return (
//         <main className="p-8">
//             <h1 className="text-2xl font-bold">{user.name}</h1>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <p>Website: {user.website}</p>
//         </main>
//     );
// }

import { User } from '@/types'; // Import the new User interface from the types file

// 2. Define the shape of the props for this page
interface UserDetailPageProps {
    params: {
        id: string;
    };
}

async function UserDetailPage({ params }: UserDetailPageProps) {
    // 3. Fetch data for the specific user
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user: User = await response.json(); // 4. Tell TypeScript the fetched data will have the shape of the User interface

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </main>
    );
}
export default UserDetailPage;