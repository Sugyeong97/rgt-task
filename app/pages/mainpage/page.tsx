import ListAdd from "@/app/components/molecules/ListAdd";
import SearchBox from "@/app/components/molecules/SearchBox";
import BookList from "@/app/components/oranism/BookList";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="w-full">
      <SearchBox />
      <BookList />
      <ListAdd />
    </div>
  );
};

export default Page;
