import React from "react";
import { GameStats } from "../components/GameStats";
import { Settings } from "../components/Settings";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="lg:grid grid-cols-3 flex flex-col justify-between h-screen lg:px-4">
      <div className="col-span-1 flex items-center">
        <GameStats />
      </div>
      <div className="col-span-1 flex items-center px-[20px] sm:px-[50px] lg:px-0">{children}</div>
      <div className="col-span-1 flex items-center">
        <Settings />
      </div>
      <div className="block lg:hidden"></div>
    </div>
  );
};
