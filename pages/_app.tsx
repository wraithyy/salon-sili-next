import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import "/styles/globals.css";
import "/styles/bootstrap.css";
import "/styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  if (pathname.startsWith("/admin")) {
    return <Component {...pageProps} />;
  }
  return <Component {...pageProps} />;
}

export default MyApp;
