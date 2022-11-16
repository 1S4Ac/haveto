import { AppProps } from "next/app";
import Head from "next/head";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Todos from "../../components/Todos";
import { RootState } from "../../store/store";
import { addTodo } from "../../store/todos/slice";

export default function TodosPage({ pageProps }: AppProps) {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const [currentValue, setCurrentValue] = useState("");

  function handleChange(
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) {
    if (event) {
      setCurrentValue(JSON.stringify(event.value));
    }
  }

  return (
    <div className="bg-black w-screen h-screen">
      <Head>
        <title>I Have to</title>
      </Head>
      <Header {...pageProps} />
      <div className="flex items-center justify-center">
        <Todos />
      </div>
    </div>
  );
}
