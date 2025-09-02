import { NextResponse } from 'next/server';
import { getUsers, addUser } from '@/lib/data'; // Import functions

export async function GET() {
  const users = await getUsers();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const { name, email, phone, website } = await request.json(); //  Destructure all four fields
  const newUser = addUser({ name, email, phone, website }); // Add user with all fields
  return NextResponse.json(newUser, { status: 201 });
}