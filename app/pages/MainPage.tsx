"use client";
import { useRouter } from "next/navigation";

import SearchBox from "../components/molecules/SearchBox";
import ListTop from "../components/molecules/ListTop";

const MainPage = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/bookinfo")}>BOOK INFO PAGE</button>
      <SearchBox />
      <ListTop />
    </>
  );
};

export default MainPage;
