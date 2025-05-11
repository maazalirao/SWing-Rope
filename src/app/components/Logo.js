const Logo = ({ className = "", color = "currentColor", altColor = "#10b981" }) => {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SWingRope Logo"
    >
      {/* Stylized S with rope element */}
      <path
        d="M20 38C14 38 8 34 8 28C8 22 12 19 18 17.5C23 16 27 15 27 12C27 9 24 8 21 8C17 8 15 10 14 13"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
      <path
        d="M32 10L38 5L44 10L50 5L56 10L62 5L68 10"
        stroke={altColor}
        strokeWidth="3"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
      <path
        d="M76 25L78 14H85L82 36H75L72 25L69 36H62L59 14H66L68 25L71 14H73L76 25Z"
        fill={color}
        className="transition-all duration-300"
      />
      <path
        d="M86 14H93V36H86V14Z"
        fill={color}
        className="transition-all duration-300"
      />
      <path
        d="M96 14H103V31H113V36H96V14Z"
        fill={color}
        className="transition-all duration-300"
      />
      <path
        d="M127 25C127 23 126 22 124 22C122 22 121 23 121 25V36H114V25C114 19 117 14 124 14C131 14 134 19 134 25V36H127V25Z"
        fill={color}
        className="transition-all duration-300"
      />
      <path
        d="M155 25C155 19 152 14 145 14C138 14 135 19 135 25C135 31 138 36 145 36C152 36 155 31 155 25ZM142 25C142 23 143 22 145 22C147 22 148 23 148 25C148 27 147 28 145 28C143 28 142 27 142 25Z"
        fill={color}
        className="transition-all duration-300"
      />
      <path
        d="M156 14H163V17C164 15 166 14 168 14C173 14 176 17 176 23V36H169V24C169 22 168 21 166 21C164 21 163 22 163 24V36H156V14Z"
        fill={color}
        className="transition-all duration-300"
      />
      <path
        d="M178 25C178 19 181 14 188 14C194 14 198 18 198 25V27H185C185 29 186 30 188 30C190 30 191 29 191 28H198C198 33 194 36 188 36C181 36 178 31 178 25ZM185 23H191C191 21 190 20 188 20C186 20 185 21 185 23Z"
        fill={color}
        className="transition-all duration-300"
      />
      
      {/* Animated wing stylized element */}
      <path
        d="M32 35C40 28 48 16 32 10"
        stroke={altColor}
        strokeWidth="3"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
    </svg>
  );
};

export default Logo; 