import { MantineProvider, Global } from '@mantine/core'
import '../styles/globals.css'
import theme from '../public/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={(theme) => ({
          a: { root: { backgroundColor: 'white' } },
          body: {
            backgroundColor: theme.colors.dark[7],
          },
        })}
      />
      <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default MyApp
