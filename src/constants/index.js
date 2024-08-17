import start from "../assets/audios/start.mp3";
import game_start from "../assets/audios/game-start.mp3";
import failure from "../assets/audios/failure.mp3";
import over from "../assets/audios/over.mp3";
import blue from "../assets/audios/blue.mp3";
import red from "../assets/audios/red.mp3";
import yellow from "../assets/audios/yellow.mp3";
import green from "../assets/audios/green.mp3"; 

export const blocks = [
  {
    key: 1,
    css: "bg-green-600",
    css_onClick: "active:bg-green-500 active:scale-110",
    css_onNext: "bg-green-500 scale-110",
  },
  {
    key: 2,
    css: "bg-red-600",
    css_onClick: "active:bg-red-500 active:scale-110",
    css_onNext: "bg-red-500 scale-110",
  },
  {
    key: null,
    css: "",
    css_onClick: "",
    css_onNext: "",
  },
  {
    key: 3,
    css: "bg-yellow-500",
    css_onClick: "active:bg-yellow-400 active:scale-110",
    css_onNext: "bg-yellow-500 scale-110",
  },
  {
    key: 4,
    css: "bg-blue-700",
    css_onClick: "active:bg-blue-600 active:scale-110",
    css_onNext: "bg-blue-500 scale-110",
  },
];

export const audioList = {
  start,
  game_start,
  failure,
  over,
  blue,
  red,
  yellow,
  green,
};
