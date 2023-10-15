import Link from "next/link";
import Logo from "./logo";
import Socials from "./socials";
import Links from "./links";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <nav className="h-20 m-4 flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <Logo />
        <Socials />
      </div>
      {session ? (
        <Links />
      ) : (
        <Link
          href="/api/auth/signin"
          className="font-bold hover:text-purple-800 duration-300"
        >
          SIGN IN
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
