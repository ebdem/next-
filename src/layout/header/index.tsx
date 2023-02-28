import React from "react";

export const Header = ({ heading }: { heading: string }) => (
  <>
    <h2>
      Next.js 13
      <hr />
    </h2>
    <h1>{heading}</h1>
  </>
);
