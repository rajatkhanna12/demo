import React from "react";
import "./index.css";

interface ButtonProps {
  type?: "button";
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className = "",
  onClick,
  disabled = false,
  label = "",
}) => {
  return (
    <button
      type={type}
      className={`buttonStyle ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
