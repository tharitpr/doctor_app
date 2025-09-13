
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export async function loginPatient({ hospital_id, password }) {
  const res = await fetch(`${API_BASE_URL}/api/user/v1/patient/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hospital_id, password }),
  });

  const data = await res.json();

  if (res.status === 200) return data;
  else if (res.status === 400) throw new Error(data.error || "Bad Request (400)");
  else if (res.status === 401) throw new Error(data.error || "Incorrect ID or Password");
  else throw new Error(data.error || `Unexpected status: ${res.status}`);
}


export async function registerPatient(formData) {
  const res = await fetch(`${API_BASE_URL}/api/user/v1/patient/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (res.status === 201) return data;
  else if (res.status === 400) throw new Error(data.error || "Bad Request (400)");
  else if (res.status === 500) throw new Error(data.error || "Server Error (500)");
  else throw new Error(data.error || `Unexpected status: ${res.status}`);
}


export async function getProfile() {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("Token not found. Please login.");

  const res = await fetch(`${API_BASE_URL}/api/user/v1/patient/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (res.status === 401) throw new Error("Unauthorized. Please login again.");
  if (!res.ok) throw new Error(data.error || "Failed to fetch profile");


  return {
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
}

function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}
