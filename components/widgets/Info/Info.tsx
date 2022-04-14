import React from "react";
import Image from "next/image";
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

export const Info = ({ title, description, procedures, image }: InfoProps) => {
  return (
    <section className="relative py-20" id="info">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              alt="..."
              layout="responsive"
              objectFit="cover"
              width={700}
              height={850}
              className="max-w-full rounded-lg shadow-lg w-full relative"
              src="https://images.pexels.com/photos/6187330/pexels-photo-6187330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4  relative">
            <div className="md:pr-12">
              {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-rocket text-xl"></i>
              </div> */}
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {description}
              </p>
              <ul className="list-none mt-6">
                {procedures.map((procedure) => (
                  <li className="py-2" key={procedure.title}>
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fa-solid fa-hand-sparkles"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">{procedure.title}</h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
