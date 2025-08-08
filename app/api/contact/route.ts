import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  // Di sini bisa integrasi email (misal Nodemailer) atau simpan ke DB
  console.log('Pesan kontak:', { name, email, message })
  return NextResponse.json({ success: true })
} 