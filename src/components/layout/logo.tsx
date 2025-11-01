"use client";

import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export default function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium transition-colors text-white hover:text-white/80 ${className || ""}`} 
      prefetch={false}
    >
      Home
    </Link>
  );
}
