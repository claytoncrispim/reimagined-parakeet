// This page component receives 'params' which contains the dynamic parts of the URL
async function UserDetailPage ({ params }: { params: { id: string}}) {
    // 1. Fetch data for the specific user using the id from params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`); // Fetch user data from an API
    const user = await response.json(); // Parse the JSON response

    // 2. Render the user details
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