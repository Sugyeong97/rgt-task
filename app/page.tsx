import { FaTrash } from "react-icons/fa";

const page = () => {
  return (
    <main className="p-3">
      {/* 상단제목 */}
      <div className="py-3 text-7xl flex justify-center align-middle">
        BOOKSTORE
      </div>

      {/* 입력 및 검색 */}
      <div className="py-3 flex gap-2 align-middle justify-center">
        <input
          placeholder="입력해 주세요."
          className="px-3 w-96 h-10 border border-black"
        />
        <button className="px-10 h-10 border border-black">검색</button>
      </div>

      {/* 공백 */}
      <div className="py-2"></div>

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
        <div className="flex justify-center align-middle hover:cursor-pointer">
          <FaTrash />
        </div>
      </div>

      <div className="grid grid-cols-4 text-center py-3">
        <div>There was a very</div>
        <div>Randal Shanahan</div>
        <div>Nemo</div>
        <div className="flex justify-center align-middle hover:cursor-pointer">
          <FaTrash />
        </div>
      </div>
    </main>
  );
};

export default page;
