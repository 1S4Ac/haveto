import { Provider } from "react-redux";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../store/store";
import { persistStore } from "redux-persist";
import LoadingComponent from "../components/Loading";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const persistor = persistStore(store);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
