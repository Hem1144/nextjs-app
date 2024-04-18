import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="link-container"></div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
