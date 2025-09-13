import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    firstName: "นาย ไก่",
    lastName: "แจ้",
    gender: "ชาย",
    phone: "0873142300",
    age: 21,
    birthDate: "20/12/2003",
    bloodType: "AB",
    citizenId: "121990012321",
    hospitalId: "BF1052G",
  });
}
