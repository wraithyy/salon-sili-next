import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Contact,
  ContactProps,
  HeroProps,
  Info,
  Hero,
  InfoProps,
  Pricing,
  PricingProps,
} from "../components/widgets";
interface Props {
  hero: { attributes: HeroProps };
  info: { attributes: InfoProps };
  pricing: { attributes: PricingProps };
  contact: { attributes: ContactProps };
}
const Home: NextPage<Props> = ({ hero, info, pricing, contact }) => {
  return (
    <>
      {hero && <Hero {...hero.attributes} />}
      {info && <Info {...info.attributes} />}
      {pricing && <Pricing {...pricing.attributes} />}
      {contact && <Contact {...contact.attributes} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hero = await import(`../content/landing/${"hero"}.md`);
  const info = await import(`../content/landing/${"info"}.md`);
  const pricing = await import(`../content/landing/${"pricing"}.md`);
  const contact = await import(`../content/landing/${"contact"}.md`);
  return {
    props: {
      hero: hero.default,
      info: info.default,
      contact: contact.default,
      pricing: pricing.default,
    },
  };
};
export default Home;
