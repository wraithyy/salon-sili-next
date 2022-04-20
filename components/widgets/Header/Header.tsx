import { link } from "fs";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { LinkType } from "../../../utils/types";

interface Props {
  transparent?: boolean;
  links?: LinkType[];
}

export const Header = ({ links, transparent }: Props): ReactElement => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (transparent
          ? "top-0 absolute z-50 w-full bg-black bg-opacity-50"
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
          <span
            className={
              (transparent ? "text-amber-400" : "text-gray-800") +
              " title-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-title text-3xl"
            }
          >
            Salon SiLi
          </span>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (transparent ? "text-white" : "text-gray-800") + " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {links?.map(({ name, url }) => (
              <li className="flex items-center" key={name}>
                <Link href={url}>
                  <a
                    className={
                      (transparent
                        ? "lg:text-white hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600") +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    <span className="inline-block ml-2">{name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
