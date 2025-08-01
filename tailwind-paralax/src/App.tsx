import "./App.css";
import SVGatorAnimation from "../public/icon.svg?url";
import { useState } from "react";
import Parallax from "./paralax";

function App() {
  const [paralax, setParalax] = useState(false);

  return (
    <>
      <div>
        {!paralax && (
          <div className="flex flex-col items-center justify-center w-full min-h-screen bg-neutral-400 px-4">
            <div className="mb-6 animate-pulse">
              <object
                data={SVGatorAnimation}
                className="w-20 h-20 rounded-full"
              ></object>
            </div>

            <input
              type="text"
              placeholder="Usuário"
              className="w-full max-w-md  px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
            />

            <button
              onClick={() => setParalax(true)}
              className="w-full max-w-md px-4 py-3 rounded-md bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2"
            >
              Entrar
              <span className="ml-1">→</span>
            </button>
          </div>
        )}
        {paralax && <Parallax />}
      </div>
    </>
  );
}

export default App;
