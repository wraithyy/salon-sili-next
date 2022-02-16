import React from "react";

export type ContactProps = {
  title: string;
  description?: string;
  image?: string;
};

export const Contact = ({ title }: ContactProps) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
