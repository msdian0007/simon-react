import React, { useState } from "react";
import { ModalLayout } from "../layouts/modal/ModalLayout";
import { useHelper } from "../contexts/useHelper";
import { useGameData } from "../contexts/gameDataContext";

export const UserGreeting = () => {
  const [name, setName] = useState("");
  const [warnings, setWarnings] = useState(0);

  const { soundEffect } = useHelper();
  const { user, setPlayerName } = useGameData();

  const handlePlayButton = () => {
    if (!name) {
      soundEffect("FAILURE");
      setWarnings(true);
    } else {
      setPlayerName(name);
      soundEffect("INTRO");
    }
  };

  const handleChange = (e) => {
    if (name.length < 1) setWarnings(0);
    setName(e.target.value);
  };

  if (user?.name) return;

  return (
    <>
      <ModalLayout>
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
              className=" md:text-sm text-lg px-3 py-1 my-[1rem] md:my-0 rounded-md font-bold bg-gradient-to-r from-red-500 via-green-400 to-yellow-500 text-[--ld]"
              onClick={handlePlayButton}
            >
              Let's PLAY
            </button>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};
