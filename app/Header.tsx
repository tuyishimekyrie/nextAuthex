import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b mx-2 pb-2">
      <Link href="/">Home</Link>
    </div>
  );
};

export default Header;
