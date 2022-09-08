/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Link } from "./Link.tsx";

export function Footer() {
  return (
    <footer class={tw`py-1 text-center text-gray-500`}>
      Copyright © 2022{" "}
      <Link href="https://github.com/ayame113/">
        ayame113
      </Link>.{" | "}
      <Link href="https://github.com/ayame113/fresh-template">
        source
      </Link>
    </footer>
  );
}
