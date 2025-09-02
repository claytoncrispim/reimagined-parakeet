"use server"; // This directive marks all functions in this file as Server Actions

import { addUserToDb } from "@/lib/data";
import { revalidatePath } from "next/cache";

// This function will run on the server when called from a client component
export async function addUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!name || !email) {
        return; // Basic validation: both fields are required
    }

    // Add the new user to our "database"
    const newUser = addUserToDb({ name, email });
    console.log("Added user:", newUser);

    // This is the magic!
    // It tells Next.js to re-render the homepage.
    // This will cause the UserList to refetch its data and display the new user.
    revalidatePath("/");

    // // For now we'll just log the data to the console
    // console.log("New user added:");
    // console.log("Adding user:", { name, email });
}