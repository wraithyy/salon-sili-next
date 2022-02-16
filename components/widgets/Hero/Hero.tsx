import React from "react";

export type HeroProps = {
  title: string;
  image?: string;
  description?: string;
};

export const Hero = ({ title }: HeroProps) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
