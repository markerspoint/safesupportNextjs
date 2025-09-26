import { NextResponse } from "next/server";
import db from '@/lib/db';
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Fetch user by email
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

    if ((rows as any[]).length === 0) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const user = (rows as any[])[0];

    // Compare password with hashed password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Password is valid — return user info
    return NextResponse.json({
      email: user.email,
      role: user.role, // "student" or "counselor"
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
