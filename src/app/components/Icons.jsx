"use client";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

import React from "react";

export const Icons = () => {
  return (
    <div>
     
      <lord-icon
        src="https://cdn.lordicon.com/vczwnict.json"
        trigger="hover"
        style={{ width: "50px", height: "50px" }}
      ></lord-icon>
    </div>
  );
};
