import React from "react";

export const ModalLayout = ({ children }) => {
  return (
    <div className="absolute top-0 inset-0 bg-black/55 z-50">
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
    </div>
  );
};
