import { useGameData } from "../contexts/gameDataContext";

export const Settings = () => {
  const { remindLastSequence } = useGameData();
  return (
    <div className="lg:text-right text-center py-4 w-full">
      <div className="flex flex-col lg:flex-row items-center lg:justify-end justify-center gap-2">
        <div className="bg-[--d] flex items-center p-2 rounded-full">
          <button
            onClick={remindLastSequence}
            className="min-w-10 min-h-10 active:bg-yellow-400 bg-yellow-600/75 rounded-full"
          />
        </div>
        <span>Last</span>
      </div>
    </div>
  );
};
