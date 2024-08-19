import { audioList } from "../constants";

export const useHelper = () => {
  return {
    soundEffect: (type) => {
      let audio;
      if (type === "INTRO") {
        audio = new Audio(audioList.intro);
      } else if (type === "GAME-START") {
        audio = new Audio(audioList.game_start);
      } else if (type === "OVER") {
        audio = new Audio(audioList.over);
      } else if (type === "FAILURE") {
        audio = new Audio(audioList.failure);
      } else if (type === "RESTART") {
        audio = new Audio(audioList.restart);
      } else if (type === 1) {
        audio = new Audio(audioList.green);
      } else if (type === 2) {
        audio = new Audio(audioList.red);
      } else if (type === 3) {
        audio = new Audio(audioList.yellow);
      } else if (type === 4) {
        audio = new Audio(audioList.blue);
      }
      audio.play();
    },
    getRandomKey: () => {
      return Math.ceil(Math.random() * 4);
    },
    getPlayerName: () => {
      return localStorage.getItem("name");
    },
    setPlayerName: (name) => {
      localStorage.setItem("name", name);
      return true;
    },
    getHighestScore: () => {
      return localStorage.getItem("hs");
    },
  };
};
