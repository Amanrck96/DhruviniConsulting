"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export default function Logo({ href = "/", className }: LogoProps) {
  // Remote logo provided by user (Facebook CDN).
  const logoUrl =
    "https://scontent.fccu9-2.fna.fbcdn.net/v/t39.30808-6/467758375_122093723924653684_1640162550763743767_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bYMSweQlx3YQ7kNvwGae7VY&_nc_oc=AdmDXpZNufHocaqHl6WWjqqiLTYTf86Zz3I1bqjeO2EmGDI7ZoIqFYQEt85IF5krfb_chmyHVumfUYX9D-LH_nbG&_nc_zt=23&_nc_ht=scontent.fccu9-2.fna&_nc_gid=mpAVX530SFWIa4H41e8KSg&oh=00_Afc_Qn5lmwZI46VYW2qTLwzPfAyh4717yTM6pRWk5a9goQ&oe=690A5D3D";

  return (
    <Link href={href} className={`flex items-center gap-3 ${className || ""}`} prefetch={false}>
      <div className="relative h-8 w-8 rounded-md overflow-hidden bg-white">
        <Image
          src={logoUrl}
          alt="Dhruvini Consulting logo"
          fill
          sizes="32px"
          className="object-contain"
          priority
        />
      </div>
      <span className="font-headline text-xl font-bold text-white">
        Dhruvini Consulting Private Limited
      </span>
    </Link>
  );
}
