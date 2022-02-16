import React from "react";

type Procedure = {
  title: string;
  description: string;
  image?: string;
};

export type InfoProps = {
  title: string;
  description?: string;
  procedures: Procedure[];
  image?: string;
};

export const Info = ({ title }: InfoProps) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
