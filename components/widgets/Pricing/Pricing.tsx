import React from "react";

type Price = {
  title: string;
  price: string;
  note?: string;
};

export type PricingProps = {
  title: string;
  description?: string;
  prices: Price[];
  image?: string;
};

export const Pricing = ({ title }: PricingProps) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
