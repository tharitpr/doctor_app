"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="bg-white min-h-screen p-4">

      <nav className="bg-[#AFFFD5] text-black p-4 flex justify-end rounded-2xl">
          <div className="mr-4">ชื่อ ____ นามสกุล ____</div>
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
