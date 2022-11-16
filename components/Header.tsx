import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { classNames } from "../utils/classes";

export interface NavItem {
  name: string;
  href: string;
}

let navItems: NavItem[] = [
  { name: "Home", href: "/home" },
  { name: "Todos", href: "/todos" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const router = useRouter();

  const [active, setActive] = useState("");

  useEffect(() => {
    const activeItem = navItems.find((item) => item.href == router.route);
    if (activeItem) {
      setActive(activeItem.href);
    }
  }, [router.route]);

  return (
    <nav className="flex sm:justify-center bg-black">
      {navItems.map(({ name, href }) => (
        <div key={href} className={classNames("p-6")}>
          <Link
            href={href}
            className={classNames(
              active == href ? "bg-green-600" : "",
              "hover:bg-green-600 text-white font-bold px-5 py-3 space-x-2 rounded-full"
            )}
          >
            {name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
