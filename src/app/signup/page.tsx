"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    hospital_id: "",
    id_card_number: "",
    password: "",
    phone_number: "",
    emergency_contact: "",
    address: "",
    allergies: "",
    blood_type: "",
    birth_date: "",
  });

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

      const res = await fetch("http://localhost:8000/api/user/v1/patient/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

    const data = await res.json(); 

    if (res.status === 201) {
 
      router.push("/termservice"); 
      } else if (res.status === 400) {

        throw new Error(data.error || "Bad Request (400)");
      } else if (res.status === 500) {

        throw new Error(data.error || "Server Error (500)");
      } else {

        throw new Error(data.error || `Unexpected status: ${res.status}`);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-[#AFFFD5] p-8 rounded-3xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Sign Up</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first_name" className="block text-black font-medium mb-1">Firstname</label>
            <input id="first_name" value={formData.first_name} onChange={handleChange} type="text" placeholder="Name" className="input-field"/>
          </div>

          <div>
            <label htmlFor="last_name" className="block text-black font-medium mb-1">Lastname</label>
            <input id="last_name" value={formData.last_name} onChange={handleChange} type="text" placeholder="Last name" className="input-field"/>
          </div>

          <div>
            <label htmlFor="gender" className="block text-black font-medium mb-1">Gender</label>
            <input id="gender" value={formData.gender} onChange={handleChange} type="text" placeholder="male/female" className="input-field"/>
          </div>

          <div>
            <label htmlFor="birth_date" className="block text-black font-medium mb-1">Birth Date</label>
            <input id="birth_date" value={formData.birth_date} onChange={handleChange} type="date" className="input-field"/>
          </div>

          <div>
            <label htmlFor="hospital_id" className="block text-black font-medium mb-1">Hospital ID</label>
            <input id="hospital_id" value={formData.hospital_id} onChange={handleChange} type="text" placeholder="ID" className="input-field"/>
          </div>

          <div>
            <label htmlFor="id_card_number" className="block text-black font-medium mb-1">Identification Number</label>
            <input id="id_card_number" value={formData.id_card_number} onChange={handleChange} type="text" placeholder="ID Number" className="input-field"/>
          </div>

          <div>
            <label htmlFor="password" className="block text-black font-medium mb-1">Password</label>
            <input id="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" className="input-field"/>
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-black font-medium mb-1">Phone Number</label>
            <input id="phone_number" value={formData.phone_number} onChange={handleChange} type="tel" placeholder="Number" className="input-field"/>
          </div>

          <div>
            <label htmlFor="emergency_contact" className="block text-black font-medium mb-1">Emergency Contact</label>
            <input id="emergency_contact" value={formData.emergency_contact} onChange={handleChange} type="tel" placeholder="Number" className="input-field"/>
          </div>

          <div>
            <label htmlFor="address" className="block text-black font-medium mb-1">Address</label>
            <input id="address" value={formData.address} onChange={handleChange} type="text" placeholder="Address" className="input-field"/>
          </div>

          <div>
            <label htmlFor="allergies" className="block text-black font-medium mb-1">Allergies</label>
            <input id="allergies" value={formData.allergies} onChange={handleChange} type="text" placeholder="Allergies" className="input-field"/>
          </div>

          <div>
            <label htmlFor="blood_type" className="block text-black font-medium mb-1">Blood Type</label>
            <input id="blood_type" value={formData.blood_type} onChange={handleChange} type="text" placeholder="A, B, AB, O" className="input-field"/>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition mt-4">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          background-color: white;
          color: black;
          outline: none;
          transition: ring 0.2s;
        }
        .input-field:focus {
          border-color: #34d399;
          box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.3);
        }
      `}</style>
    </div>
  );
}
