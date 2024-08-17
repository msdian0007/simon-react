import { StartButton } from "./StartButton";
import { Blocks } from "./Blocks";
import { RestartButton } from "./RestartButton";
import { blocks } from "../constants";
import { useGameData } from "../contexts/gameDataContext";
import { GameOver } from "./GameOver";

export const Home = () => {
  const { level, randomSelection, handleBlockSelection, restart, handleStart } =
    useGameData();

  return (
    <>
      <div className="div-center">
        {/* <div className="">
          <div className="text-center py-4 text-2xl">
            Level: <span className="text-orange-500">{level}</span>
          </div>
        </div> */}
        <div className="grid grid-cols-2 gap-x-5">
          {blocks.map((v, i) => {
            return (
              <div
                key={i}
                className={`${i === 2 ? "col-span-2 z-10" : "col-span-1"}`}
              >
                {i === 2 ? (
                  level <= 0 ? (
                    <StartButton handleStart={handleStart} />
                  ) : (
                    <RestartButton restart={restart} />
                  )
                ) : (
                  <Blocks
                    {...{ prop: v, handleBlockSelection, randomSelection }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <GameOver />
    </>
  );
};
