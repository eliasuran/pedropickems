"use client";

import Link from "next/link";

interface Props {
  text: String;
  link: URL;
}

const LinkItem = ({ text, link }: Props) => {
  return (
    <Link
      className="font-bold hover:text-purple-800 duration-300 cursor-pointer"
      href={link}
    >
      {text}
    </Link>
  );
};

export default LinkItem;
