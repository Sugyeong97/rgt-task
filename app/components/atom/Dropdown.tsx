import { NextPage } from "next";

interface Props {}

const Dropdown: NextPage<Props> = ({}) => {
  return (
    <div className="flex justify-center items-center gap-5 px-3">
      <label className="flex justify-center items-center gap-1">
        <input type={"radio"} name="choice" />
        제목
      </label>

      <label className="flex justify-center items-center gap-1">
        <input type={"radio"} name="choice" />
        저자
      </label>
    </div>
  );
};

export default Dropdown;
