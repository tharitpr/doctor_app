import { NextResponse } from "next/server";

// Mock POST API สำหรับ Signup
export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Signup mock data received:", body);

    // ส่ง mock response กลับ
    return NextResponse.json({
      message: "User registered successfully (mock)",
      data: {
        first_name: body.first_name || "นาย ไก่",
        last_name: body.last_name || "แจ้",
        gender: body.gender || "ชาย",
        phone_number: body.phone_number || "0873142300",
        birth_date: body.birth_date || "2003-12-20",
        blood_type: body.blood_type || "AB",
        id_card_number: body.id_card_number || "121990012321",
        hospital_id: body.hospital_id || "BF1052G",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Failed to register user (mock)" },
      { status: 500 }
    );
  }
}
