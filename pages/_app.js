import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Inter } from "@next/font/google";
import Cursor from "../components/Cursor/Cursor";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Cursor />
      <Component {...pageProps} />
    </div>
  );
}
