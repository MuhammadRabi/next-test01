import PageTitle from "@components/PageTitle";
import Repo from "@components/Repo";

const fetchRepos = async () => {
  const resp = await fetch("https://api.github.com/users/muhammadrabi/repos");
  const data = await resp.json();
  return data;
};

const RepoPage = async () => {
  const repos = await fetchRepos();
  return (
    <section>
      <PageTitle title="repo page" />
      <div className="">
        {repos.map((repo) => {
          return <Repo key={repo.id} {...repo} />;
        })}
      </div>
    </section>
  );
};
export default RepoPage;
