import "../styles/global.scss";
import type { AppProps } from "next/app";

import { AuthContextProvider } from "../context/auth";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default App;
