import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="w-full h-full flex justify-center items-center text-3xl text-pink-400">
      Book Add Page
    </div>
  );
};

export default Page;
