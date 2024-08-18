import { useGameData } from "../contexts/gameDataContext";

export const GameStats = () => {
  const { level, user } = useGameData();
  return (
    <div className="lg:text-left text-center w-full h-full py-4 flex flex-col justify-between">
      <div>
        <span className="flex items-center pb-6 text-xl">
          Hi,
          <span className="text-orange-400 font-semibold pl-1 text-xl italic">
            {user?.name}...🍁
          </span>
        </span>
      </div>
      <div className="flex flex-col w-full items-center lg:items-start">
        <span className="flex items-center">
          Level:
          <span className="text-rose-600 font-semibold text-2xl pl-1">
            {level}
          </span>
        </span>
        <span className="flex items-center">
          Highest Score:
          <span className="text-rose-600 font-semibold text-2xl pl-1">
            {user?.highScore}
          </span>
        </span>
      </div>
      <div></div>
    </div>
  );
};
