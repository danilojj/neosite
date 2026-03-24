"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          // Variants
          variant === "primary" &&
            "bg-neo-blue text-white hover:bg-neo-blue-light shadow-lg shadow-neo-blue/20 hover:shadow-neo-blue/40",
          variant === "secondary" &&
            "bg-neo-card text-neo-text border border-neo-border hover:border-neo-blue/50 hover:bg-neo-elevated",
          variant === "outline" &&
            "bg-transparent text-neo-text border border-neo-border hover:border-neo-cyan/50 hover:text-neo-cyan",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
