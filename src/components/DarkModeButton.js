import React from "react";

export const DarkModeButton = (themer) => {
  return(
    <button onClick={themer} className="border-solid border-2 border-dark-color px-4 py-2 cursor-pointer">Modo Vampiro</button>
  )
}