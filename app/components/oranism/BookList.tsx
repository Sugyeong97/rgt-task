import { NextPage } from "next";
import ListBottom from "../molecules/ListBottom";
import ListTop from "../molecules/ListTop";

interface Props {}

const BookList: NextPage<Props> = ({}) => {
  return (
    <>
      <ListTop />
      <ListBottom />
    </>
  );
};

export default BookList;
