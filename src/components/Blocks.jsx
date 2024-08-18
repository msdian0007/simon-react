import { useGameData } from "../contexts/gameDataContext";

export const Blocks = ({ props }) => {
  const { randomSelection, handleBlockSelection } = useGameData();
  return (
    <div
      onClick={() => handleBlockSelection(props?.key)}
      className={` cursor-pointer w-full h-0 pb-[90%] ${props?.css_onClick} transition-all rounded-xl ${props?.css} ${
        props?.key === randomSelection ? props?.css_onNext : null
      }`}
    ></div>
  );
};
