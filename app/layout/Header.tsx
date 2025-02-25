"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div
      className="py-3 text-7xl flex justify-center align-middle hover:cursor-pointer"
      onClick={() => {
        router.push("/");
      }}
    >
      BOOKSTORE
    </div>
  );
};

export default Header;
