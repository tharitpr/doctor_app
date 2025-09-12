"use client";

import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    router.push("/termservice"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-[#AFFFD5] p-8 rounded-3xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Sign Up</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="name" className="block text-black font-medium mb-1">Firstname</label>
            <input
              type="text"
              id="first_name"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          
          <div>
            <label htmlFor="surname" className="block text-black font-medium mb-1">Lastname</label>
            <input
              type="text"
              id="sur_name"
              placeholder="Last name"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-black font-medium mb-1">Gender</label>
            <input
              type="text"
              id="gender"
              placeholder="male/female"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="surname" className="block text-black font-medium mb-1">Hospital ID</label>
            <input
              type="text"
              id="hospital_id"
              placeholder="ID"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="idNumber" className="block text-black font-medium mb-1">Identification Number</label>
            <input
              type="text"
              id="id_card_number"
              placeholder="ID Number"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          
          <div>
            <label htmlFor="phoneNumber" className="block text-black font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Number"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-black font-medium mb-1">Emergency Number</label>
            <input
              type="tel"
              id="emergency_number"
              placeholder="Number"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-black font-medium mb-1">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="surname" className="block text-black font-medium mb-1">Allergies</label>
            <input
              type="text"
              id="allergies"
              placeholder="Allergies"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="surname" className="block text-black font-medium mb-1">Blood Type</label>
            <input
              type="text"
              id="blood_type"
              placeholder="A, B, AB, O"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          
          <div className="space-y-2 mt-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 text-green-600 bg-gray-300 border-gray-300 rounded" />
              <span className="text-black">ฉันยอมรับเงื่อนไขและข้อตกลงการใช้งาน</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 text-green-600 bg-gray-300 border-gray-300 rounded" />
              <span className="text-black">ยอมรับเงื่อนไขความเป็นส่วนตัว</span>
            </label>
          </div>

          
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
