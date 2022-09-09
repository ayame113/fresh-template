import { RenderableProps } from "preact";

export function Section(props: RenderableProps<{ title: string }>) {
  return (
    <section class="mt-4 bg-white rounded-lg p-2 shadow-md max-w-4xl mx-auto">
      <h2 class="text-3xl border-b-2 p-2">{props.title}</h2>
      <div class="p-2">{props.children}</div>
    </section>
  );
}
