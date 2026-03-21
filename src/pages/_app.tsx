import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap").then(({ Carousel }) => {
      document.querySelectorAll('[data-bs-ride="carousel"]').forEach(el => new Carousel(el));
    });
  }, []);

  return <Component {...pageProps} />;
}
