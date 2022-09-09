import { Section } from "./Section.tsx";
import Counter from "../islands/Counter.tsx";

export function Main() {
  return (
    <main class="bg-gray-100 p-4 shadow-inner flex-grow">
      <Section title="discription">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
      </Section>
      <Section title="counter">
        <Counter start={0} />
      </Section>
    </main>
  );
}
