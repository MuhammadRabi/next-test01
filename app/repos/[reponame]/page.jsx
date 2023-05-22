import SingleRepo from "@components/SingleRepo";

const RepoDetailspage = async ({ params: { reponame } }) => {
  return (
    <article className="h-screen">
      <SingleRepo reponame={reponame} />
    </article>
  );
};
export default RepoDetailspage;
