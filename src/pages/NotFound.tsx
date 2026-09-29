import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)", color: "var(--fg)" }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4" style={{ color: "var(--fg-2)" }}>Oops! Page not found</p>
        <a href="/" className="hover:underline" style={{ color: "var(--violet)" }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
