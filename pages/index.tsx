import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

export default function Loading() {
  const global = useSelector((state: RootState) => state.global);
  const router = useRouter();
  router.push("/home");
}
