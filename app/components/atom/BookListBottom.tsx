import { NextPage } from "next";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

interface BookListBottomProps {
  BOOK_ID: number;
  BOOK_TITLE?: string;
  BOOK_AUTHOR?: string;
  BOOK_PUBLISHER?: string;
}

const BookListBottom: NextPage<BookListBottomProps> = ({
  BOOK_ID = 1,
  BOOK_TITLE = "BOOK_TITLE",
  BOOK_AUTHOR = "BOOK_AUTHOR",
  BOOK_PUBLISHER = "BOOK_PUBLISHER",
}) => {
  return (
    <div className="w-full h-full grid grid-cols-5 text-center py-3">
      <div>{BOOK_ID}</div>
      <Link href={`/rgt-task/pages/book-info`}>{BOOK_TITLE}</Link>
      <Link href={`/rgt-task/pages/author-info`}>{BOOK_AUTHOR}</Link>
      <Link href={`/rgt-task/pages/publisher-info`}>{BOOK_PUBLISHER}</Link>
      <DeleteButton />
    </div>
  );
};

export default BookListBottom;
