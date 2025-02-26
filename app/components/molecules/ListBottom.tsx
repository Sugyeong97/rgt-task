import { NextPage } from "next";
import Link from "next/link";
import DeleteButton from "../atom/DeleteButton";

interface Props {}

const ListBottom: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-4 text-center py-3">
      <Link href={`/pages/book-info`}>제목제목제목</Link>
      <Link href={`/pages/author-info`}>저자저자저자</Link>
      <div>출판사출판사</div>
      <DeleteButton />
    </div>
  );
};

export default ListBottom;
