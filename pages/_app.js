import { createStyles, MantineProvider,Global, Box, Button } from "@mantine/core";
import "../styles/globals.css";
import theme from "./theme"; 
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
      <Global 
        styles={(theme)=>({
          a:{root:{backgroundColor:"white"}},
          body:{
            backgroundColor:theme.colors.dark[7]
          }
        })}
      /> 
      <MantineProvider
        theme={theme}
        withNormalizeCSS
        withGlobalStyles
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
