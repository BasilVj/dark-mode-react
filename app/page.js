"use client";
import { Hero, Section1, Section2, Section3 } from "@/components";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main>
      <div className="toggle-container">
        <div className="toggle-switch">
          <label className="switch-label">
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => setDarkMode((prev) => !prev)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <Hero darkMode={darkMode} />
      <Section1 darkMode={darkMode} />
      <Section2 darkMode={darkMode} />
      <Section3 darkMode={darkMode} />
    </main>
  );
}
