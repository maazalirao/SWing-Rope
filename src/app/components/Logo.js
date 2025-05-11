"use client";

const Logo = ({ className = "", color = "currentColor", altColor = "#10b981" }) => {
  return (
    <div 
      className={`text-xl font-bold ${className}`}
      style={{ color: color }}
      aria-label="SWing Rope Logo"
    >
      SWing Rope
    </div>
  );
};

export default Logo; 