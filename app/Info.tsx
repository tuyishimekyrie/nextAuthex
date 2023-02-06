import React from "react";
import Image from "next/image";

type props = {
  user: any;
};

const Info = ({ user }: props) => {
  return (
    <div>
      <p>{user?.user.name}</p>
      <p>{user?.user.email}</p>
      <Image src={user?.user.image} alt={user?.user.name} width={100} height={100} className="rounded-lg"/>{" "}
    </div>
  );
};

export default Info;
