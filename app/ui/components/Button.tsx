import React from "react";
import type { ButtonVariant,ButtonProps } from "../../lib/button";

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  className,
}) => {
  const getButtonClass = (variant: ButtonVariant) => {
    switch (variant) {
      case "primary":
        return "bg-white border border-black pt-2 pb-2 pl-5 pr-5 hover:underline underline-offset-4 decoration-1";
      case "secondary":
        return "bg-black text-white pt-2 pb-2 pl-5 pr-5 hover:underline underline-offset-4 decoration-1";

      //return 'bg-white border border-black pt-2 pb-2 pl-5 pr-5 hover:underline underline-offset-4 decoration-1';
      case "skills-light":
        return "bg-[#F4F8D3] text-[#8E7DBE] pt-[2px] pb-[2px] pl-5 pr-5 text-sm rounded-3xl border-2 border-[#8E7DBE]";
      case "skills-dark":
        return "bg-white border font-bold font-semibold border-black pt-2 pb-2 pl-5 pr-5 ";
      case "size-active":
        return "bg-black text-white font-bold pt-2 pb-2 pl-5 pr-5 ";

      default:
        return "";
    }
  };

  return (
    <button
      className={`${getButtonClass(variant)} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
