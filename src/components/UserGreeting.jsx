import React, { useEffect, useState } from "react";
import failureSound from "../assets/audios/failure-2.mp3";

export const UserGreeting = () => {
  const [name, setName] = useState("");
  const [warnings, setWarnings] = useState(0);

  const handlePlayButton = () => {
    if (!name) {
      const fa = new Audio(failureSound);
      fa.play();
      setWarnings(true);
    }
  };

  const handleChange = (e) => {
    if (name.length < 1) setWarnings(0);
    setName(e.target.value);
  };

  return (
    <div className="md:flex grid gap-4 text-center">
      <div className="md:text-2xl text-5xl">Hello,</div>
      <input
        autoFocus
        type="text"
        placeholder="your name..."
        className={`${
          warnings
            ? `border-[1px] border-rose-500 text-rose-400`
            : `border-b-[1px] border-teal-100 `
        }  md:text-md text-teal-400 text-2xl mx-[4px] text-center outline-none bg-transparent`}
        value={name}
        onChange={handleChange}
      />
      <div className="flex items-center justify-center">
        <button
          className=" md:text-sm text-xl px-3 py-1 my-[2rem] md:my-0 rounded-md font-bold bg-gradient-to-r from-red-500 via-green-400 to-yellow-500 text-[--ld]"
          onClick={handlePlayButton}
        >
          Let's PLAY
        </button>
      </div>
    </div>
  );
};
