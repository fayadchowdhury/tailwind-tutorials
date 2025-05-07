import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-violet-200 h-full w-full border-2 border-violet-600 rounded-md p-2">
      <h1 className="text-[35px] text-[#9e7171] text-center font-mono">
        Vite + React + TypeScript + TailwindCSS
      </h1>

      {/* Static positioning goes with the normal flow of the web page */}
      {/*<div className="static bg-red-300">
        <p>Static parent</p>
        <div className="absolute bottom-0 left-0 bg-red-500">
          <p>Absolute child of static parent</p>
        </div>
      </div>*/}

      {/* Relative positioning moves the children elements relative to the normal position of the relative parent*/}
      {/*<div className="relative bg-blue-300">
        <p>Relative parent</p>
        <div className="absolute top-0 left-10 bg-blue-500 mt-3">
          <p>Absolute child 1 of relative parent</p>
        </div>
        <div className="absolute top-10 left-10 bg-blue-500">
          <p>Absolute child 2 of relative parent</p>
        </div>
      </div>*/}

      {/* Fixed positioning is relative to the viewport */}
      {/*<div className="fixed bg-green-300">
        <p>Fixed parent</p>
        <div className="absolute top-10 left-10 bg-green-500">
          <p>Absolute child of fixed parent</p>
        </div>
      </div>*/}

      {/* Sticky positioning - super useful in building soething like a contact list */}
      {/*<div>
        <div>
          <div className="sticky top-0 ...">A</div>
          <div>
            <div>
              <strong>Andrew Alfred</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0">B</div>
          <div>
            <div>
              <img src="/img/bob.jpg" />
              <strong>Bob Alfred</strong>
            </div>
          </div>
        </div>
      </div>*/}

      {/* An important way to organize layouts is by using flexbox */}
      <div className="flex justify-normal gap-2 m-5">
        {/* The flex class sort of arranges the children elements in the parent relative to the parent box */}
        <div className=" bg-red-300 h-16 w-16 rounded-full"></div>
        <div className=" bg-green-300 h-16 w-16 rounded-full"></div>
        <div className=" bg-blue-300 h-16 w-16 rounded-full"></div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 m-5">
        {/* It is also possible to do columnar layouts using flexbox and flex-col */}
        {/* The items-[] class then modifies the placement of the flex column*/}
        <div className=" bg-red-300 h-16 w-16 rounded-full"></div>
        <div className=" bg-green-300 h-16 w-16 rounded-full"></div>
        <div className=" bg-blue-300 h-16 w-16 rounded-full"></div>
      </div>

      {/* It is also possible to use grid to organize layouts */}
      {/* With grids, if no space is provided the child element will occupy any space available to it */}
      <div className="grid grid-cols-8 gap-2 m-5">
        <div className="bg-red-300 h-16 w-16 rounded-full"></div>
        <div className="bg-blue-300 h-16 w-16 rounded-full"></div>
        <div className="bg-green-300 h-16 rounded-full"></div>
      </div>

      {/* Media queries in tailwind are mobile first*/}
      {/* apply hidden to all sizes other than the one you want it visible for */}
      <div className="text-red-500 sm:text-red-500 md:text-yellow-500 lg:text-green-500">
        <p>Text is red for sm, yellow for md and green for lg+</p>
      </div>
      <div className="text-red-500 md:hidden">
        <p>Text is hidden for md+</p>
      </div>
      <div className="max-sm:hidden">
        <p>Text is hidden for displays sm-</p>
      </div>
      {/* Tailwind offers a CSS selector for dark mode */}
      <div className="bg-white dark:bg-black text-black dark:text-white">
        <p>Text is black for light mode and white for dark mode</p>
      </div>
      {/* There is a cooler way to toggle dark mode on/off */}
      <a href="https://flowbite.com/docs/customize/dark-mode/">
        Cool dark mode!
      </a>
    </div>
  );
}

export default App;
