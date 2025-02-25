import React from "react";
import DeleteButton from "../atom/DeleteButton";

const ListTop = () => {
  return (
    <>
      {/* 목록 제목 */}
      <div className="grid grid-cols-4 text-center py-3 border-y border-black">
        <div>제목</div>
        <div>저자</div>
        <div>출판사</div>
        <div>삭제</div>
      </div>

      {/* 목록 */}
      <div className="grid grid-cols-4 text-center py-3">
        <div>There was a very</div>
        <div>Randal Shanahan</div>
        <div>Nemo</div>
        <DeleteButton />
      </div>

      <div className="grid grid-cols-4 text-center py-3">
        <div>There was a very</div>
        <div>Randal Shanahan</div>
        <div>Nemo</div>
        <DeleteButton />
      </div>
    </>
  );
};

export default ListTop;
