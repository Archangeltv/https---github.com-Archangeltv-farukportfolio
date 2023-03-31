import { useContext } from "react";
import { Appcontext } from "../App";

function Links() {
  const { home, useHome, toggle } = useContext(Appcontext);

  return (
    <div className="w-full bg-[#171F26] text-[#A3ABB2] flex items-center justify-center gap-10 px-5 py-2 my-8 rounded">
      <button
        className={`flex h-[45px] md:h-[80px] ${
          home ? "bg-transparent" : "bg-[#0c151d]"
        } rounded w-full items-center justify-center gap-1 md:gap-3`}
        onClick={() => {
          useHome(false);
        }}
      >
        Portfolio
      </button>
      <button
        className={`flex h-[45px] md:h-[80px] ${
          home ? "bg-[#0c151d]" : "bg-transparent"
        } rounded w-full items-center justify-center gap-1 md:gap-3`}
        onClick={() => {
          useHome(true);
        }}
      >
        Skills
      </button>
    </div>
  );
}

export default Links;