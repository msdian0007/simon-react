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
  const [sequence, setSequence] = useState([]);
  const [playerSeq, setPlayerSeq] = useState([]);
  const [randomSelection, setRandomSelection] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const { soundEffect, getRandomKey } = useHelper();

  const setHighestScore = useCallback(() => {
    let localUser;
    localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser.highScore < level) {
      localUser["highScore"] = level;
      setUser(localUser);
    }
    localStorage.setItem("user", JSON.stringify(localUser));
  }, [level]);

  const gameOver = () => {
    soundEffect("OVER");
    setHighestScore();
    setIsGameOver(true);
    setSequence([]);
    setPlayerSeq([]);
  };

  const handleRandomSelection = useCallback((key, delay = 500) => {
    setTimeout(() => {
      soundEffect(key);
      setRandomSelection(key);
    }, delay);
  }, []);

  const nextLevel = () => {
    let key = getRandomKey();
    setSequence((prev) => [...prev, key]);
    setPlayerSeq([]);
    handleRandomSelection(key);
    setLevel(level + 1);
  };

  const checkSequence = (key) => {
    setPlayerSeq((prev) => [...prev, key]);
    let latestPlayerSeq = [...playerSeq, key];
    let isSeqCorrect = false;
    for (let i = 0; i < latestPlayerSeq.length; i++) {
      if (sequence[i] !== latestPlayerSeq[i]) {
        isSeqCorrect = false;
      } else {
        isSeqCorrect = true;
      }
    }
    if (isSeqCorrect && sequence.length === latestPlayerSeq.length) {
      soundEffect(key);
      nextLevel();
    } else if (!isSeqCorrect) {
      gameOver();
    } else {
      soundEffect(key);
    }
  };

  const handleRestart = () => {
    soundEffect("RESTART");
    setLevel(0);
    setSequence([]);
    setPlayerSeq([]);
  };

  const handleBlockSelection = (key) => {
    sequence.length && checkSequence(key);
  };

  const handleStart = () => {
    setIsGameOver(false);
    setLevel(0);
    soundEffect("GAME-START");
    const key = getRandomKey();
    handleRandomSelection(key, 1000);
    setSequence([key]);
  };

  const setPlayerName = useCallback((name) => {
    let localUser;
    localUser = JSON.parse(localStorage.getItem("user"));
    localUser["name"] = name;
    setUser(localUser);
    localStorage.setItem("user", JSON.stringify(localUser));
  }, []);

  const remindLastSequence = useCallback(() => {
    if (!sequence.length) return;
    let key = sequence[sequence?.length - 1];
    handleRandomSelection(key);
  }, [sequence]);

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
        sequence,
        playerSeq,
        randomSelection,
        isGameOver,
        handleBlockSelection,
        handleRestart,
        handleStart,
        setPlayerName,
        remindLastSequence,
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
