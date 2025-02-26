// 책 목록 보여줌
"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import DeleteButton from "../atom/DeleteButton";
import axios from "axios";

interface BookListProps {}

const ListBottom: NextPage<BookListProps> = ({}) => {
  const [bookTitleData, setBookTitleData] = useState<string>("book-title");

  return (
    <>
      <div className="grid grid-cols-4 text-center py-3">
        <Link href={`/rgt-task/pages/book-info`}>{bookTitleData}</Link>
        <Link href={`/rgt-task/pages/author-info`}>저자11</Link>
        <Link href={`/rgt-task/pages/publisher-info`}>출판사11</Link>
        <DeleteButton />
      </div>
    </>
  );
};

export default ListBottom;
