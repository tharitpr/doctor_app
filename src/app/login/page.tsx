"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginPatient } from "@/services/apiService";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ hospital_id: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const data = await loginPatient(formData); 

    if (!data.access_token) {
      throw new Error("Incorrect ID or Password"); 
    }

    localStorage.setItem("access_token", data.access_token);
    router.push("/dashboard");

  } catch (err: any) {
    if (err?.response?.status === 401 || err?.response?.status === 400) {
      setError("Incorrect ID or Password");
    } else {
      setError(err.message || "Something went wrong");
    }
  } finally {
    setLoading(false);
  }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-[#AFFFD5] p-8 rounded-3xl shadow-lg w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Login</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="hospital_id" className="block text-black font-medium mb-1">
              Hospital Number
            </label>
            <input
              type="text"
              id="hospital_id"
              placeholder="Enter Hospital Number"
              value={formData.hospital_id}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-black font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            {loading ? "Logging in..." : "Login"}
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
