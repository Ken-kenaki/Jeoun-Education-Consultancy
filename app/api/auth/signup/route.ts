import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, password } = (await request.json()) as {
      name?: string;
      email?: string;
      password?: string;
    };

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    const { account, databases } = await createAdminClient();
    
    // First, create the user account
    const user = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    // Create email password session
    const session = await account.createEmailPasswordSession(email, password);

    // Set session cookie
    const cookieStore = cookies();
    cookieStore.set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return NextResponse.json({ 
      success: true, 
      message: "Account created successfully",
      userId: user.$id 
    });
  } catch (error: unknown) {
    console.error("Signup error:", error);
    
    let errorMessage = "Signup failed. Please try again.";
    let statusCode = 500;
    
    if (typeof error === 'object' && error !== null) {
      const appwriteError = error as any;
      
      // Handle specific Appwrite error codes
      if (appwriteError.code === 409) {
        errorMessage = "An account with this email already exists.";
        statusCode = 409;
      } else if (appwriteError.code === 400) {
        errorMessage = "Invalid email format or password requirements not met.";
        statusCode = 400;
      } else if (appwriteError.message) {
        errorMessage = appwriteError.message;
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}