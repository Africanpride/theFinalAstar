import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  console.log(`${name} and ${email}`);

  try {
    
    return NextResponse.json(
      { message: 'Success: email was sent' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Error: ' + error }, { status: 500 });
  }
}
