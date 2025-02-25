"use client";
import { useRouter } from "next/navigation";
import SearchBox from "../components/molecules/SearchBox";
import NavBar from "./NavBar";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div
        className="py-3 text-7xl flex justify-center align-middle hover:cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        BOOKSTORE
      </div>
      <SearchBox />
    </>
  );
};

export default Header;
