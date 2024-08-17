import React from 'react'

export const RestartButton = ({ handleRestart }) => {
    return (
        <div className="text-center">
            <span className="bg-[--ld] rounded-full py-10 px-2">
                <span
                    onClick={handleRestart}
                    className="bg-[--s] rounded-full text-[--ld] font-bold cursor-pointer hover:bg-[--p] py-8 px-4"
                >
                    RE-START
                </span>
            </span>
        </div>
    )
}
