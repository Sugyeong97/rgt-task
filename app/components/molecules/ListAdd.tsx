// 책 추가 기능 컴포넌트

"use client";
import { NextPage } from "next";

interface Props {}

const ListAdd: NextPage<Props> = ({}) => {
  const handleClick = () => window.open(`/rgt-task/pages/book-add`);

  return (
    <div
      className="w-full p-3 m-5 flex justify-center items-center gap-2 bg-gray-100 hover:cursor-pointer"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      서적 추가하기
    </div>
  );
};

export default ListAdd;
