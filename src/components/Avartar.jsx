import React from "react";

export default function Avartar({ size, src }) {
  return (
    <div>
      <img
        src={
          src ||
          "https://images.pexels.com/photos/10678803/pexels-photo-10678803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="user"
        className="rounded-full"
        style={{ width: `${size}rem`, height: `${size}rem` }}
      />
    </div>
  );
}
