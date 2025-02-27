import { NextPage } from "next";
import ListBottom from "../molecules/ListBottom";
import ListTop from "../molecules/ListTop";

interface Props {}

const BookList: NextPage<Props> = ({}) => {
  return (
    <div className="w-full h-full">
      <ListTop />
      <ListBottom />
    </div>
  );
};

export default BookList;
