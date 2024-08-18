import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHelper } from "./useHelper";
import { userSchema } from "../constants";

const GameContext = createContext();

const GameDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [level, setLevel] = useState(0);
  const [target, setTarget] = useState([]);
  const [targetSteps, setTargetSteps] = useState([]);
  const [randomSelection, setRandomSelection] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const { playaAudio, getRandomKey } = useHelper();

  const checkHighestScore = () => {
    const hs = localStorage.getItem("hs");
    if (!hs) {
      localStorage.setItem("hs", level);
    } else {
      if (hs < level) {
        localStorage.setItem("hs", level);
      }
    }
  };

  const gameOver = () => {
    playaAudio("OVER");
    checkHighestScore();
    setIsGameOver(true);
    setTarget([]);
    setTargetSteps([]);
  };

  const nextLevel = () => {
    let key = getRandomKey();
    setTarget((prev) => [...prev, key]);
    setTargetSteps([]);
    setTimeout(() => {
      playaAudio(key);
      setRandomSelection(key);
    }, 1000);
    setLevel(level + 1);
  };

  const checkIsPatternCorrect = (key) => {
    setTargetSteps((prev) => [...prev, key]);
    let localTargetSteps = [...targetSteps, key];
    let isCorrect = false;
    for (let i = 0; i < localTargetSteps.length; i++) {
      if (target[i] !== localTargetSteps[i]) {
        isCorrect = false;
      } else {
        isCorrect = true;
      }
    }
    if (isCorrect && target.length === localTargetSteps.length) {
      nextLevel();
    } else if (!isCorrect) {
      gameOver();
    }
  };

  const handleRestart = () => {
    setLevel(0);
  };

  const handleBlockSelection = (key) => {
    playaAudio(key);
    target.length && checkIsPatternCorrect(key);
  };

  const handleStart = () => {
    setIsGameOver(false);
    setLevel(0);
    playaAudio("GAME-START");
    const key = getRandomKey();
    setTimeout(() => {
      playaAudio(key);
      setRandomSelection(key);
    }, 1000);
    setTarget([key]);
  };

  const setPlayerName = useCallback((name) => {
    let localUser;
    localUser = JSON.parse(localStorage.getItem("user"));
    localUser["name"] = name;
    setUser(localUser)
    localStorage.setItem("user", JSON.stringify(localUser));
  }, []);

  useEffect(() => {
    let localUser = localStorage.getItem("user");
    if (!localUser) localStorage.setItem("user", JSON.stringify(userSchema));
  }, []);

  useEffect(() => {
    let localUser = localStorage.getItem("user");
    if (localUser) setUser(JSON.parse(localUser));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRandomSelection(0);
    }, 200);
  }, [randomSelection]);

  return (
    <GameContext.Provider
      value={{
        user,
        level,
        target,
        targetSteps,
        randomSelection,
        isGameOver,
        handleBlockSelection,
        handleRestart,
        handleStart,
        setPlayerName,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameDataProvider;

export const useGameData = () => {
  return useContext(GameContext);
};
