"use client";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <h2>Varun</h2>
      <div>
        <button onClick={toggleTheme} className="theme-btn">
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
