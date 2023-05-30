const Button = ({ title, link }) => {
  return (
    <button className="px-3 capitalize hover:text-slate-800 hover:bg-white duration-300 w-fit py-1 rounded-md bg-slate-800 cursor-pointer text-white">
      <a href={link}>{title}</a>
    </button>
  );
};

export default Button;
