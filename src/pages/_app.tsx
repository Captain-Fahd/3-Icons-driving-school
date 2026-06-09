import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import { Google_Sans } from "next/font/google";

const gSans = Google_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})
export const THEME_COLOR = "#0a9b33";
export const THEME_HOVER = "#087b28"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <div className={gSans.className} style={{ fontFamily: "inherit" }}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}