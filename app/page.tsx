import React from "react";
import Home from "./Home";
import { getServerSession } from "next-auth";
import Link from "next/link";



const page = async () => {
  const session = await getServerSession();
  return (
    <div className="flex flex-col py-5 items-center divide">
      <h2 className="text-3xl pb-8">Google Authentication </h2>
      <Home session={session} />
    </div>
  );
};

export default page;
