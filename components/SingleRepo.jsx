const fetchSingleRepo = async (reponame) => {
  const res = await fetch(
    `https://api.github.com/repos/muhammadrabi/${reponame}`
  );

  const data = res.json();
  return data;
};

const SingleRepo = async ({ reponame }) => {
  const singleRepo = await fetchSingleRepo(reponame);

  return (
    <article className="w-1/3 mx-auto space-y-4 rounded-md bg-slate-400">
      <h2 className="p-4 text-4xl font-bold text-white rounded-t-md bg-slate-500">
        {singleRepo.name}
      </h2>
      <div className="p-4">
        <a href={singleRepo.svn_url} className="underline capitalize">
          to repo
        </a>
        <p className="text-xl cursor-pointer text-sky-700">
          visit demo {singleRepo.homepage}
        </p>
      </div>
    </article>
  );
};
export default SingleRepo;
