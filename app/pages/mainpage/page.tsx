import BookList from "@/app/components/oranism/BookList";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <BookList />
    </div>
  );
};

export default Page;
