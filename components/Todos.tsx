import { useEffect, useState, useRef, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  addTodo,
  getTodos,
  markTodoAsDone,
  removeTodo,
  Todo,
} from "../store/todos/slice";
import { classNames } from "../utils/classes";
import { FaToiletPaper } from "react-icons/fa";
import { Button } from "./Button";

export default function Todos() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.todos);
  const [currentTodo, setCurrentTodo] = useState("");
  const [doneTodos, setDoneTodos] = useState(0);
  const bottomRef = useRef();

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state.todos.length]);

  useEffect(() => {
    let i = 0;
    state.todos.map((item) => {
      if (item.done) {
        i++;
      }
    });
    setDoneTodos(i);
  }, [state.todos, doneTodos]);

  return (
    <div
      className={classNames("bg-zinc-600 rounded-3xl mt-20 max-h-max w-3/4")}
    >
      {state.todos.length > 0 ? (
        <div className="flex justify-center items-center">
          <div>
            <h1 className="font-bold text-xl text-white mt-5">{`Feitas ${doneTodos} de ${state.todos.length}`}</h1>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="w-2/4 p-5">
            <h1></h1>
          </div>
          <div className="flex p-5 w-2/4">
            <h1 className="text-start font-bold text-xl text-white mt-5">
              {`Nenhuma Tarefa adicionada, digita aí em baixo nessa caixa de texto belíssima o que deseja fazer`}
            </h1>
          </div>
        </div>
      )}

      <div className="box-content p-8 h-full">
        <div>
          <ul
            id="todos"
            className="overflow-y-auto scrollbar-hide h-96 space-y-3"
          >
            {state.todos.map(({ name, id, done }) => {
              return (
                <li
                  className={classNames(
                    done ? "bg-green-400" : "bg-zinc-400",
                    "subpixel-antialiased flex justify-between h-auto w-auto px-5 py-3 text-white font-medium rounded-xl hover:bg-black"
                  )}
                  key={id}
                  onClick={() => {
                    dispatch(markTodoAsDone(id));
                  }}
                >
                  {name}
                  <a
                    href="#"
                    className="text-red-500 bg-black p-3 rounded-full"
                    onClick={() => {
                      dispatch(removeTodo(id));
                    }}
                  >
                    <FaToiletPaper className="rounded-full w-full" />
                  </a>
                </li>
              );
            })}
            <div ref={bottomRef} />
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addTodo(currentTodo));
              setCurrentTodo("");
            }}
          >
            <div
              id="form-actions"
              className="w-full md:flex md:justify-between mt-10"
            >
              <div id="input-controller" className="w-5/6">
                <input
                  type="text"
                  placeholder="Tenho que..."
                  value={currentTodo}
                  onChange={(e) => {
                    setCurrentTodo(e.target.value);
                  }}
                  className="rounded-full focus:ring-1 focus:outline-none focus:ring-purple-900 w-11/12"
                />
              </div>
              <div className="md:w-2/6 sm:w-6/6">
                <Button
                  className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-500 font-bold rounded-full md:rounded-full sm:rounded-t-none text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
