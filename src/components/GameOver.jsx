import { useGameData } from "../contexts/gameDataContext";
import { ModalLayout } from "../layouts/modal/ModalLayout";
import { StartButton } from "./StartButton";
export const GameOver = () => {
  const { isGameOver } = useGameData();
  const { handleStart, level, user } = useGameData();
  if (isGameOver) {
    return (
      <>
        <ModalLayout>
          <div className="text-center">
            <div className="text-5xl text-rose-600 py-6">Game Over!</div>
            <div className="text-3xl pt-4 italic">
              Your Score:{" "}
              <span className="text-green-500 font-bold">{level}</span>
            </div>
            <div className="text-3xl pb-4 italic">
              Highest Score:{" "}
              <span className="text-green-500 font-bold">
                {user?.highScore}
              </span>
            </div>
            <div className="text-2xl py-4">
              {" "}
              Press{" "}
              <span className="text-3xl font-semibold text-blue-600">
                START
              </span>{" "}
              button to Restart the Game
            </div>
            <div className="mt-10">
              <StartButton handleStart={handleStart} />
            </div>
          </div>
        </ModalLayout>
      </>
    );
  }
};
