import React from "react";
import Navegation from "./Navegation";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
        <span className="font-bold">
            AppName
        </span>

      <Navegation />
    </header>
  );
}

export default Header;
