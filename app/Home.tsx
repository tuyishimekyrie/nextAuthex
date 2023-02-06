"use client";
import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useSession,signOut } from "next-auth/react";
import Info from "./Info";

type props = {
  session: Awaited<ReturnType<typeof getServerSession>>;
};
const Home = ({ session }: props) => {
  const { data: user }: any = useSession();
  console.log(user);
  return (
    <div>
      {!user && <Link
        href="/auth/signin"
        className="bg-indigo-600 hover:bg-cyan-500  py-1.5 px-3 roundend-sm"
      >
        Sign in
      </Link>}
      {user && <button onClick={() => signOut()} className="bg-orange-600 hover:bg-cyan-500  py-1.5 px-3 roundend-sm">
        Sign Out
      </button>}
      {user && <Info user={user} />}
    </div>
  );
};

export default Home;
