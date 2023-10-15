"use client";

import SocialLink from "@/components/navbar/socialLink";
import { BsTwitch } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex gap-2 mt-2">
      <SocialLink
        link={new URL("https://twitch.tv/caedrel")}
        image={<BsTwitch />}
      />
      <SocialLink
        link={new URL("https://discord.com/invite/caedrel")}
        image={<BsDiscord />}
      />
      <SocialLink
        link={new URL("https://twitter.com/caedrel")}
        image={<FaXTwitter />}
      />
    </div>
  );
};

export default Socials;
