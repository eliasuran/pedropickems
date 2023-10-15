"use client";

import LinkItem from "./linkItem";

const Links = () => {
  return (
    <div className="flex gap-8">
      <LinkItem
        text="GIVEAWAY"
        link={new URL("https://caedrelworldsgiveaway.com/")}
      />
      <LinkItem
        text="LEADERBOARD"
        link={new URL("http://localhost:3000/leaderboard")}
      />
      <LinkItem
        text="SIGN OUT"
        link={new URL("http://localhost:3000/api/auth/signout")}
      />
    </div>
  );
};

export default Links;
