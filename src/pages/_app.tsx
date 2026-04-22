import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import {createContext, useState} from "react";
interface PageContextInterface {
    pageTitle: string,
    setPageTitle: React.Dispatch<React.SetStateAction<string>>
}
const PageContext = createContext<PageContextInterface | null>(null)

export default function App({ Component, pageProps }: AppProps) {
    const [pageTitle, setPageTitle] = useState<string>("");
  return (
    <Provider>

      <Component {...pageProps} />
    </Provider>
  );
}