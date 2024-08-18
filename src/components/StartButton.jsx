import { useGameData } from "../contexts/gameDataContext";

export const StartButton = () => {
  const { handleStart } = useGameData();
  return (
    <div className="text-center">
      <span className="bg-[--ld] rounded-full py-10 px-2">
        <span
          onClick={handleStart}
          className="bg-[--s] text-[--ld] font-bold rounded-full cursor-pointer hover:bg-[--p] py-8 px-4"
        >
          START
        </span>
      </span>
    </div>
  );
};
