import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="username" placeholder="Username" className="border p-2" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="border p-2" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="border p-2" onChange={handleChange} />
        <button className="bg-blue-500 text-white p-2">Register</button>
      </form>
    </div>
  );
}
