import UserList from "@/components/UserList";
import Counter from "@/components/Counter";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Next.js Intro</h1>
      <UserList /> {/* Server Component */}
      <Counter />  {/* Client Component */}
    </main>
  );
}