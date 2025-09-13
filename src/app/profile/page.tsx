"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
      const token = localStorage.getItem("access_token");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/api/user/v1/patient/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.status === 401) {
          router.push("/login"); 
          return;
        }

        if (!res.ok) {
          throw new Error(data.error || "Failed to get profile");
        }


        const profileData: Profile = {
          firstName: data.first_name,
          lastName: data.last_name,
          gender: data.gender,
          phone: data.phone_number,
          birthDate: data.birth_date,
          bloodType: data.blood_type,
          citizenId: data.id_card_number,
          hospitalId: data.hospital_id,
          age: calculateAge(data.birth_date),
        };

        setProfile(profileData);
      } catch (err: any) {
        console.error("Error fetching profile:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">กำลังโหลดข้อมูล...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">ไม่สามารถโหลดข้อมูลได้</p>
      </div>
    );
  }

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
