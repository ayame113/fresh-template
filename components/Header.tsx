/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header class={tw`text-lg border-t-2 border-black p-1`}>
      <a href="/" class={tw`block`}>
        <span class={tw`text-2xl italic`}>[[Page Title]]</span>{" "}
        - add discription to me.
      </a>
    </header>
  );
}
