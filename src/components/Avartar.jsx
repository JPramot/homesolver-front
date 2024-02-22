import React from "react";
import person from "../assets/profile.png";

export default function Avartar({ size, src }) {
  return (
    <div>
      <img
        src={src || person}
        alt="user"
        className="rounded-full"
        style={{ width: `${size}rem`, height: `${size}rem` }}
      />
    </div>
  );
}
