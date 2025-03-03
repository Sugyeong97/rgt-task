// 목록 상단 제목 부분

import { NextPage } from "next";

interface Props {}

const ListTop: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-5 text-center py-3 border-y border-black">
      <div>No.</div>
      <div>제목</div>
      <div>저자</div>
      <div>출판사</div>
      <div>삭제</div>
    </div>
  );
};

export default ListTop;
