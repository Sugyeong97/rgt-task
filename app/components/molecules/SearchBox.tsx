// 입력 및 검색
import Button from "../atom/Button";
import InputBox from "../atom/InputBox";

const SearchBox = () => {
  return (
    <div className="py-3 flex gap-2 align-middle justify-center">
      <InputBox />
      <Button />
    </div>
  );
};

export default SearchBox;
