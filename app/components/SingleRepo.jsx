import Button from "./Button";

const getRepo = async (reponame) => {
  const res = await fetch(
    `https://api.github.com/repos/muhammadrabi/${reponame}`
  );

  const data = res.json();
  return data;
};

const SingleRepo = async ({ reponame }) => {
  const singleRepo = await getRepo(reponame);

  return (
    <article className="w-3/4 mx-auto space-y-4 rounded-md lg:w-1/3 bg-slate-400">
      <h2 className="p-4 text-4xl font-bold text-white rounded-t-md bg-slate-500">
        {singleRepo.name}
      </h2>
      <p className="p-4 text-gray-100">{singleRepo.description}</p>
      <div className="flex justify-around p-4">
        <Button title="visit repo" link={singleRepo.svn_url} />
        <Button title="live demo" link={singleRepo.homepage} />
      </div>
    </article>
  );
};
export default SingleRepo;
