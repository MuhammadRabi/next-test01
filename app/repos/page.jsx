import PageTitle from "@app/components/PageTitle";
import Repo from "@app/components/Repo";

const getAllRepos = async () => {
  const resp = await fetch("https://api.github.com/users/muhammadrabi/repos");
  const data = await resp.json();
  return data;
};

const RepoPage = async () => {
  const repos = await getAllRepos();
  return (
    <section>
      <PageTitle title="repo page" />
      <div className="w-3/4 mx-auto mt-12 xl:w-1/3">
        {repos.map((repo) => {
          return <Repo key={repo.id} {...repo} />;
        })}
      </div>
    </section>
  );
};
export default RepoPage;
