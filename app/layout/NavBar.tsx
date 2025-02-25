import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center gap-10 hover:cursor-pointer">
      <Link href={`/`} className="p-10 bg-pink-400">
        메인
      </Link>
      <Link href={`/pages/bookinfo`} className="p-10 bg-pink-400">
        상세
      </Link>
    </div>
  );
};

export default NavBar;
