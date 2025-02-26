"use client";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <>
      <Link
        href={`/`}
        className="py-3 text-5xl font-bold flex justify-center align-middle hover:cursor-pointer"
      >
        BOOKSTORE
      </Link>
    </>
  );
};

export default Header;
