import SingleRepo from "@app/components/SingleRepo";
import { Suspense } from "react";

const RepoDetailspage = async ({ params: { reponame } }) => {
  return (
    <article className="h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        <SingleRepo reponame={reponame} />
      </Suspense>
    </article>
  );
};
export default RepoDetailspage;
