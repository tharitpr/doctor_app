"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Profile {
  first_name: string;
  last_name: string;
}

export default function LandingPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("access_token"); 
      if (!token) {
        router.push("/login"); 
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/api/user/v1/patient/me", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);
  return (
    <div className="bg-white min-h-screen p-4">

      <nav className="bg-[#AFFFD5] text-black p-4 flex justify-end items-center rounded-2xl">
        {profile ? (
          <div
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
            onClick={() => router.push("/profile")}
          >
            <span className="font-bold">
              {profile.first_name} {profile.last_name}
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl">
              👤
            </div>
          </div>
        ) : (
          <span className="text-sm text-gray-600">กำลังโหลด...</span>
        )}
      </nav>


      <div className="my-6 text-gray-700">
        <p className="text-black text-lg font-semibold mb-4">เมนู</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#AFFFD5] text-black p-6 rounded-3xl text-center shadow-md cursor-pointer hover:scale-105 transition-transform">
          จองคิว
        </div>
        <div className="bg-[#AFFFD5] text-black p-6 rounded-3xl text-center shadow-md cursor-pointer hover:scale-105 transition-transform">
          ประวัติการรักษา
        </div>
        <div className="bg-[#AFFFD5] text-black p-6 rounded-3xl text-center shadow-md cursor-pointer hover:scale-105 transition-transform">
          ประวัติการสั่งยา
        </div>
        <div className="bg-[#AFFFD5] text-black p-6 rounded-3xl text-center shadow-md cursor-pointer hover:scale-105 transition-transform">
          เช็คสิทธ์รักษา
        </div>
      </div>


      <h2 className="text-black text-lg font-semibold mb-4">นัดหมายที่จะมาถึง</h2>

      <div className="space-y-4">
        <div className="bg-[#AFFFD5] text-white p-4 rounded-3xl flex justify-between items-center shadow-md">
          <div>
            <p className="text-black font-semibold">ชื่อ นามสกุล</p>
            <p className="text-black text-sm">วัน เดือน ปี เวลา</p>
          </div>
          <button className="bg-green-100 px-4 py-2 rounded-2xl hover:bg-green-800 transition-colors">
            <p className="text-black">รายละเอียด</p>
          </button>
        </div>
        <div className="bg-[#AFFFD5] text-white p-4 rounded-3xl flex justify-between items-center shadow-md">
          <div>
            <p className="text-black font-semibold">ชื่อ นามสกุล</p>
            <p className="text-black text-sm">วัน เดือน ปี เวลา</p>
          </div>
          <button className="bg-green-100 px-4 py-2 rounded-2xl hover:bg-green-800 transition-colors">
            <p className="text-black">รายละเอียด</p>
          </button>
        </div>
      </div>
    </div>
  );
}
