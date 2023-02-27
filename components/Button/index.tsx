"use client";
import React from "react";

export default function Button({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      onClick={handleClick}
      className="rounded-none bg-green-400"
      type="button"
    >
      <span>Button</span>
    </button>
  );
}
