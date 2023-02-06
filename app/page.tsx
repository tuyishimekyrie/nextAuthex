import React from "react";
import Home from "./Home";
import { getServerSession } from "next-auth";
import Link from "next/link";

// type props = {
//   session: Awaited<ReturnType<typeof getServerSession>>;
// };

const page = async () => {
  const session = await getServerSession();
  return (
    <div className="flex flex-col py-5 items-center">
      
      <Home session={session} />
    </div>
  );
};

export default page;
