import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { stopLoading } from "../../store/global/slice";

export default function Home({ pageProps }: AppProps) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(stopLoading());
  });
  
  useEffect(() => {
    setLoading(true);
  }, [isLoading]);

  return (
    <div className="w-screen h-screen bg-black">
      <Head>
        <title>I Have to</title>
      </Head>
      <Header {...pageProps} />
      <div className="flex items-center justify-center">
        <Button>Create account</Button>
        <Button>Create account</Button>
      </div>
    </div>
  );
}
