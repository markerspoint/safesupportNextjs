import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db'; // your mysql2 pool or Prisma client

export async function GET(req: NextRequest) {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Database error' }, { status: 500 });
  }
}
