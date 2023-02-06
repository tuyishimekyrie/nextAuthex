import React from "react";
import { getProviders } from "next-auth/react";
import SignComponent from "./SignComponent";

export default async function page() {
  const providers = await getProviders();
  return (
    <div>
      <SignComponent providers={providers}  />
    </div>
  );
}
