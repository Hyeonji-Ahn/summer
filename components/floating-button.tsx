import Link from "next/link";
import React from "react";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link href={href} className="transition hover:bg-orange-500 fixed bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white">
        {children}
    </Link>
  );
}