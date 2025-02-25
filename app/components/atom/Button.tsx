type ButtonProps = { title?: string };

const Button = ({ title = "title" }: ButtonProps) => {
  return (
    <div className="px-10 py-2 border border-black flex justify-center items-center hover:cursor-pointer">
      {title}
    </div>
  );
};

export default Button;
