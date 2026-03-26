"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showEyeIcon?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export default function PasswordInput({
  className,
  showEyeIcon = true,
  ref,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex items-center">
      <Input
        type={showPassword ? "text" : "password"}
        className={`pr-10 ${className}`}
        ref={ref}
        {...props}
      />

      {showEyeIcon && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 h-full px-3 py-2 "
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <Eye className="h-4 w-4 text-muted-foreground" />
          ) : (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      )}
    </div>
  );
}