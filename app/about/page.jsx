import PageTitle from "@components/PageTitle";
import Link from "next/link";
const page = () => {
  return (
    <section className="min-h-screen">
      <PageTitle title="about page" />
      <p className="w-3/4 my-6 text-slate-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
        sapiente quas. Doloremque sint numquam, modi culpa quas optio sit
        voluptate nobis. Iste maxime saepe omnis vero amet ducimus, aperiam
        tempora voluptatum. Ea fuga fugit laboriosam repellat vel earum
        accusantium, doloribus a rem exercitationem? Saepe ducimus cumque,
        placeat laudantium a qui perferendis natus harum consectetur voluptatum
        at ipsam cum vero! Beatae dolores perspiciatis architecto impedit eius
        nostrum quo nulla, aut ullam deleniti voluptatum, quaerat, cumque
        dolore.
      </p>
      <button className="px-4 py-2 text-white duration-300 rounded-md shadow-lg bg-cyan-600 hover:bg-cyan-700">
        <Link href="/">Home</Link>
      </button>
    </section>
  );
};
export default page;
