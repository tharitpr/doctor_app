"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProfile } from "@/services/apiService";

interface Profile {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  age: number;
  birthDate: string;
  bloodType: string;
  citizenId: string;
  hospitalId: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile();
        setProfile(profileData);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
        if (err.message.includes("Unauthorized")) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (loading) return <p className="text-center mt-20">กำลังโหลดข้อมูล...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;
  if (!profile) return <p className="text-center mt-20">ไม่สามารถโหลดข้อมูลได้</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-green-500 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-gray-400 text-4xl">
            👤
          </div>
          <h1 className="mt-3 text-xl font-bold">
            {profile.firstName} {profile.lastName}
          </h1>
          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            <span className="bg-white text-green-700 px-3 py-1 rounded-full text-sm shadow">
              🎂 {profile.age} years
            </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-full text-sm shadow">
              {profile.gender === "ชาย" ? "♂ ชาย" : "♀ หญิง"}
            </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-full text-sm shadow">
              🩸 {profile.bloodType}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white mt-6 p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-green-600">
          ข้อมูลส่วนตัว
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoItem label="ชื่อ" value={profile.firstName} />
          <InfoItem label="นามสกุล" value={profile.lastName} />
          <InfoItem label="เพศ" value={profile.gender} />
          <InfoItem label="เบอร์โทรศัพท์" value={profile.phone} />
          <InfoItem label="อายุ" value={`${profile.age}`} />
          <InfoItem label="วันเกิด" value={profile.birthDate} />
          <InfoItem label="กรุ๊ปเลือด" value={profile.bloodType} />
          <InfoItem label="เลขบัตรประชาชน" value={profile.citizenId} />
          <InfoItem label="เลขประจำตัวโรงพยาบาล" value={profile.hospitalId} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}
