import { NextPage } from "next";
import DeleteButton from "../atom/DeleteButton";

interface Props {}

const ListBottom: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-4 text-center py-3">
      <div>제목제목제목</div>
      <div>저자저자저자</div>
      <div>출판사출판사</div>
      <DeleteButton />
    </div>
  );
};

export default ListBottom;
