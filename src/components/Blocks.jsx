import React from 'react'

export const Blocks = ({ prop, handleBlockSelection, randomSelection }) => {
    return (
        <div
            onClick={() => handleBlockSelection(prop?.key)}
            className={` cursor-pointer md:h-[250px] md:w-[250px] h-[150px] w-[150px] ${prop?.css_onClick
                } transition-all rounded-xl ${prop?.css} ${prop?.key === randomSelection ? prop?.css_onNext : null
                }`}
        ></div>
    )
}
