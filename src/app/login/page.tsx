"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-[#AFFFD5] p-8 rounded-3xl shadow-lg w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Login</h1>
        
        <form className="space-y-4">
          
          <div>
            <label htmlFor="hospitalNumber" className="block text-black font-medium mb-1">
              Hospital Number
            </label>
            <input
              type="text"
              id="hospitalNumber"
              placeholder="Enter Hospital Number"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          
          <div>
            <label htmlFor="phoneNumber" className="block text-black font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>

       
        <div className="my-4 border-t border-green-400"></div>

        
        <p className="text-center text-black mt-2">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium underline hover:text-green-900">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
