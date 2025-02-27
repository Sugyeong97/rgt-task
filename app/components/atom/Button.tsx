import { NextPage } from "next";
import React from "react";

interface ButtonProps {
  title?: string;
}

const Button: NextPage<ButtonProps> = ({ title = "title" }) => {
  return (
    <div className="px-10 py-2 border border-black flex justify-center items-center hover:cursor-pointer">
      {title}
    </div>
  );
};

export default Button;
