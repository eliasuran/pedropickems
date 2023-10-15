import React from "react";
import Link from "next/link";

interface Props {
  image: React.ReactElement;
  link: URL;
}

const SocialLink = ({ link, image }: Props) => {
  return (
    <Link href={link} className="text-4xl cursor-pointer">
      {image}
    </Link>
  );
};

export default SocialLink;
