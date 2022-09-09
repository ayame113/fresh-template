import * as metadata from "../metadata.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Main } from "../components/Main.tsx";

export default function Home() {
  return (
    <body class="min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
      <head>
        <title>{metadata.TITLE}</title>
        <meta name="description" content={metadata.DESCRIPTION} />
        <meta name="theme-color" content={metadata.THEME_COLOR} />
        <meta property="og:title" content={metadata.TITLE} />
        <meta property="og:description" content={metadata.DESCRIPTION} />
        <meta property="og:url" content="https://favi.deno.dev" />
        <meta property="og:image" content="https://favi.deno.dev/🍋.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_ayame113_" />
        <link rel="icon" type="image/png" href={metadata.FAVICON_URL} />
        <link rel="apple-touch-icon" href={metadata.FAVICON_URL} />
      </head>
    </body>
  );
}
