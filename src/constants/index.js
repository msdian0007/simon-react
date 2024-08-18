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
    css_onClick: "active:bg-green-400 active:scale-110",
    css_onNext: "bg-green-400 scale-110",
  },
  {
    key: 2,
    css: "bg-red-600",
    css_onClick: "active:bg-red-400 active:scale-110",
    css_onNext: "bg-red-400 scale-110",
  },
  {
    key: 0,
    css: "",
    css_onClick: "",
    css_onNext: "",
  },
  {
    key: 3,
    css: "bg-yellow-500",
    css_onClick: "active:bg-yellow-300 active:scale-110",
    css_onNext: "bg-yellow-300 scale-110",
  },
  {
    key: 4,
    css: "bg-blue-700",
    css_onClick: "active:bg-blue-500 active:scale-110",
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

export const userSchema = {
  name:"",
  highScore:0,
  settings:{},
}