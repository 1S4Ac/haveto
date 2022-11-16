import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

export interface Todo {
  id: string;
  name: string;
  description?: string;
  data: string;
  createdAt: Date;
  updatedAt?: Date;
  done: boolean;
}

export interface List {
  id: string;
  name: string;
  todos: Todo[];
}

export interface TodoState {
  loaded: boolean;
  active: string;
  lists: List[];
  todos: Todo[];
}

const initialState: TodoState = {
  loaded: false,
  active: "",
  lists: [],
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<string>) => {
      const todo: Todo = {
        createdAt: new Date(),
        id: v4(),
        name: action.payload,
        data: "",
        done: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      let i = -1;
      state.todos.map(item => {
        i++
        if (item.id == id) {
          state.todos.splice(i, 1);
        }
      })
    },
    openTodo: (state, action) => {
      state.active = action.payload;
    },
    closeTodo: (state) => {
      state.active = "";
    },
    addList: () => {},
    updateTodo: () => {},
    markTodoAsDone: (state: TodoState, action: PayloadAction<string>) => {
      const id = action.payload;
      console.log("marked as done", id);
      const found = state.todos.find((todo) => todo.id == id);
      if (found) {
        found.done = !found.done;
      }
    },
    updateTodoSuccess: () => {},
    getTodos: () => {},
    getTodosSuccess: () => {},
    getTodosError: () => {},
  },
});

export default todosSlice.reducer;
export const {
  addTodo,
  removeTodo,
  openTodo,
  closeTodo,
  addList,
  updateTodo,
  markTodoAsDone,
  updateTodoSuccess,
  getTodos,
  getTodosSuccess,
  getTodosError,
} = todosSlice.actions;
