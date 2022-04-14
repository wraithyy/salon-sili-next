import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/widgets";
import { useRouter } from "next/dist/client/router";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  if (pathname.startsWith("/admin")) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout title="Salon Sili">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
