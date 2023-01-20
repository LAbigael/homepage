"use client";

import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello ! Je suis un developpeur d&apos;applications freelance"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 30,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="border-rosePine-text lg:h-10 h-16 bg-rosePineDawn-rose/40 rounded my-6 py-2 font-mono text-center">
      <span className="" ref={el}></span>
    </div>
  );
}
