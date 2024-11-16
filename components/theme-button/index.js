"use client";
import { useEffect, useState } from "react";
import { FiMoon, GoSun } from "@/icons";
import styles from "@/components/header/styles.module.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  };

  return (
    <div className={styles.headerButton} onClick={toggleTheme} href="#">
      <div className={styles.moonIcon}>
        {isDarkMode ? <GoSun /> : <FiMoon />}
      </div>
    </div>
  );
};

export default ThemeToggle;
