import { createStyles, MantineProvider } from "@mantine/core";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {





  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Habibi&family=Telex&display=swap"
        rel="stylesheet"
      ></link>

      <MantineProvider
        theme={{
          fontFamily: "Telex",
          headings: { fontFamily: "Habibi" },
        }}
        styles={{
          Link:{root:{backgroundColor:"white"}}
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
