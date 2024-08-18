import { Blocks } from "./Blocks";
import { blocks } from "../constants";
import { GameOver } from "./GameOver";
import { UserGreeting } from "./UserGreeting";
import { ToggleButtons } from "./ToggleButtons";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 w-full">
        {blocks.map((b, i) => {
          return (
            <div
              key={i}
              className={`${i === 2 ? "col-span-2 z-10" : "col-span-1"}`}
            >
              {i === 2 ? <ToggleButtons /> : <Blocks props={b} />}
            </div>
          );
        })}
      </div>
      <GameOver />
      <UserGreeting />
    </>
  );
};
