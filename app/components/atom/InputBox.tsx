import { NextPage } from "next";

interface Props {}

const InputBox: NextPage<Props> = ({}) => {
  return (
    <input
      placeholder="입력해 주세요."
      className="px-3 w-96 py-2 border border-black"
    />
  );
};

export default InputBox;
