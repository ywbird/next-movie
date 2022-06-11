import { AppProps } from "next/dist/shared/lib/router/router";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
