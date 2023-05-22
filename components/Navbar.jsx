"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const Navlinks = [
    { id: 1, href: "/", title: "home" },
    { id: 2, href: "/repos", title: "repos" },
    { id: 3, href: "/about", title: "about" },
    { id: 4, href: "/profile", title: "profile" },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex justify-center p-3 space-x-8 font-semibold text-white capitalize bg-slate-800">
      {Navlinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.href}
            className={`${
              pathname === link.href ? "text-cyan-500" : ""
            } cursor-pointer hover:text-cyan-500 duration-300`}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};
export default Navbar;
