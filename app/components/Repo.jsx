import Link from "next/link";
import { FaEye, FaStar, FaCodeBranch } from "react-icons/fa";

const Repo = ({
  name,
  description,
  stargazers_count,
  forks_count,
  watchers_count,
}) => {
  return (
    <Link href={`/repos/${name}`}>
      <section className="flex flex-col p-4 mb-6 duration-300 rounded-sm shadow-lg hover:translate-x-3 bg-slate-300">
        <h2 className="mb-4 font-bold capitalize text-slate-800">{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between mt-6 stats">
          <div className="flex items-center space-x-1 text-gray-500">
            <span>{watchers_count}</span>
            <FaEye />
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <span>{stargazers_count}</span>
            <FaStar />
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <span>{forks_count}</span>
            <FaCodeBranch />
          </div>
        </div>
      </section>
    </Link>
  );
};
export default Repo;
