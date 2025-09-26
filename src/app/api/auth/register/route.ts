import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Check if user already exists
    const [existing] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if ((existing as any[]).length > 0) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user with default role 'student'
    await db.execute(
      "INSERT INTO users (name, email, password, role, created_at, updated_at) VALUES (?, ?, ?, 'student', NOW(), NOW())",
      [name, email, hashedPassword]
    );

    return NextResponse.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
