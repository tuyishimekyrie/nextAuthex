"use client";

import React from "react";
import { getProviders, signIn } from "next-auth/react";

type props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

const SignComponent = ({ providers }: props) => {
  return (
    <div>
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-indigo-600 hover:bg-cyan-500  py-1.5 px-3 roundend-sm"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl:
                  process.env.NEXTAUTH_URL || "https://next-authex.vercel.app",
              })
            }
          >
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignComponent;
