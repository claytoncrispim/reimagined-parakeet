"use client";

import { useRef } from "react";

// The component now accepts a prop: a function to call when a user is added.
export default function AddUserForm({ onUserAdded }: { onUserAdded: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const website = formData.get("website") as string;

    // Send the new user data to our API route
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, website }),
    });
    
    // Call the parent's function to signal an update
    onUserAdded();
    
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-6 p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add a New User</h2>
      {/* Form inputs remain the same */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
        <input type="text" id="name" name="name" required className="w-full p-2 border rounded-md text-accent" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <input type="email" id="email" name="email" required className="w-full p-2 border rounded-md text-accent" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 font-medium">Phone (Optional)</label>
        <input type="tel" id="phone" name="phone" className="w-full p-2 border rounded-md text-accent" />
      </div>
      <div className="mb-4">
        <label htmlFor="website" className="block mb-1 font-medium">Website (Optional)</label>
        <input type="url" id="website" name="website" placeholder="https://example.com" className="w-full p-2 border rounded-md text-accent" />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Add User
      </button>
    </form>
  );
}