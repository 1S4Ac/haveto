import { ButtonHTMLAttributes } from "react";
import { classNames } from "../utils/classes";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps, classes: string) {
  return (
    <button
      className={classNames(
        props.className
          ? ""
          : "w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      )}
      {...props}
    />
  )
}
