// src/lib/server/appwrite.ts
"use server";
import { Client, Account, Databases, Storage } from "node-appwrite";
import { cookies } from "next/headers";

interface SessionClient {
  account: Account;
  databases: Databases;
  storage: Storage;
}

interface AdminClient {
  account: Account;
  databases: Databases;
  storage: Storage;
}

export async function createSessionClient(): Promise<SessionClient> {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const cookieStore = cookies();
  const session = (await cookieStore).get("my-custom-session");
  
  if (session?.value) {
    client.setSession(session.value);
  }

  return {
    account: new Account(client),
    databases: new Databases(client),
    storage: new Storage(client),
  };
}

export async function createAdminClient(): Promise<AdminClient> {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.APPWRITE_API_KEY!); 

  return {
    account: new Account(client),
    databases: new Databases(client),
    storage: new Storage(client),
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

// Add this function for server actions that need admin privileges
export async function withAdminClient<T>(operation: (client: AdminClient) => Promise<T>): Promise<T> {
  const adminClient = await createAdminClient();
  return operation(adminClient);
}