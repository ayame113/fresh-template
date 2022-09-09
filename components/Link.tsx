import type { h } from "preact";

export function Link({ ...props }: h.JSX.HTMLAttributes<HTMLAnchorElement>) {
  if (
    props.href?.startsWith("https://") ||
    props.href?.startsWith("http://") ||
    props.href?.startsWith("//")
  ) {
    props.target ??= "_brank";
  }
  props.children ??= props.href;
  return (
    <a
      {...props}
      class={(props.class ? `${props.class} ` : "") +
        "text-blue-600 hover:underline"}
    >
      {props.children}
    </a>
  );
}
