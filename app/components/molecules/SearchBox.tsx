//입력 및 검색
import { NextPage } from "next";
import Button from "../atom/Button";
import Dropdown from "../atom/Dropdown";
import InputBox from "../atom/InputBox";

interface Props {}

const SearchBox: NextPage<Props> = ({}) => {
  return (
    <div className="py-3 flex gap-2 align-middle justify-center">
      <Dropdown />
      <InputBox />
      <Button title="검색" />
    </div>
  );
};

export default SearchBox;
