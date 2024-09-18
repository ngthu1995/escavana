import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex  gap-x-4">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/tours">Tours</Link>
      <Link href="/actions">Action</Link>
    </nav>
  );
}
