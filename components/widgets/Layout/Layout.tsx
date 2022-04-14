import { PropsWithChildren } from "react";
import Head from "next/head";
import { Header, Footer } from "../";
import { LinkType } from "../../../utils/types";

interface Props {
  title?: string;
  transparent?: boolean;
}
const links: LinkType[] = [
  {
    name: "Domů",
    url: "/",
  },
  {
    name: "Informace",
    url: "#info",
  },
  {
    name: "Ceník",
    url: "#pricing",
  },
  {
    name: "Kontakt",
    url: "#contact",
  },
];
export const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Header links={links} transparent={false} />
      </header>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
