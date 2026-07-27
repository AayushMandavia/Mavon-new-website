import React from "react";

export interface RainbowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  href?: string;
  onClick?: () => void;
}

export function RainbowButton({
  children,
  className = "",
  variant = "default",
  href,
  ...props
}: RainbowButtonProps) {
  const borderContent = (
    <span
      className={`relative inline-flex items-center justify-center rounded-full p-[1px] overflow-hidden group active:scale-95 transition-all duration-300 ${
        variant === "outline" ? "opacity-90" : ""
      } ${className}`}
    >
      {/* Animated Rainbow Border Background around the button */}
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8f00ff,#ff0000)] bg-[length:200%_100%] animate-rainbow overflow-hidden" />

      {/* Inner Button Content */}
      <span className="relative z-10 w-full h-full rounded-full bg-[#0C0C0C] group-hover:bg-[#141414] transition-colors duration-200 px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-center text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" {...props}>
        {borderContent}
      </a>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className="inline-block">
      {borderContent}
    </button>
  );
}

export default RainbowButton;
