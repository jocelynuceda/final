import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white shadow-lg">
      <div className="text-2xl font-bold tracking-wide text-gray-300">
        TurnoLab
      </div>
      <ul className="flex items-center gap-6 text-sm font-medium">
        {token ? (
          <>
            <li>
              <button
                onClick={handleLogout}
                className="cursor-pointer transition hoverL text-violet-300"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="transition hover:text-violet-200">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register" className="transition hover:text-violet-200">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
