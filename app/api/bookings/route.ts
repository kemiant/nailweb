import { NextResponse } from 'next/server';
import { createSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, service, date, notes } = body;

  if (!name || !email || !phone || !service || !date) {
    return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
  }

  const supabase = createSupabaseAdmin();

  const { error } = await supabase.from('bookings').insert([
    {
      name,
      email,
      phone,
      service,
      date,
      notes,
    },
  ]);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Booking request received successfully.' }, { status: 201 });
}
