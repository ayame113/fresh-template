/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Section } from "./Section.tsx";
import Counter from "../islands/Counter.tsx";

export function Main() {
  return (
    <main class={tw`bg-gray-100 p-4 shadow-inner flex-grow`}>
      <Section title="discription">This is Fresh templete website.</Section>
      <Section title="counter">
        <Counter start={0} />
      </Section>
    </main>
  );
}
