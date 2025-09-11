"use  cleint";

export default function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">  
      <div className="bg-[#AFFFD5] p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Welcome to Our Doctor Appointment App</h1>
        <p className="text-center text-black mb-6">Book appointments and order medications easily.</p>
        <div className="flex flex-col space-y-4">
          <a
            href="/login"
            className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold text-center hover:bg-green-800 transition"
          >
            Login 
          </a>
          <a
            href="/signup"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold text-center hover:bg-green-600 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}