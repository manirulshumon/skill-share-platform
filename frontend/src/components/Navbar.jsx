import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold">Skill Share</Link>
      <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
