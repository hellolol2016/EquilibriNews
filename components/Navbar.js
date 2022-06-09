import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Stack,
  Space,
  Box,
  Button,
} from "@mantine/core";
import Link from "next/link";
import useStyles from "../pages/styles";


const NavLink = ({children, href, body}) => {
  const theme = useMantineTheme()
  return <Link href={href} ><Button color={theme.colors.gray[9]}>{children}</Button></Link>
}




export default function AppShellDemo() {
  return (
    <Box p="">
      <Box fixed sx={{ position:"absolute"}}>
        <Link href="/" >
          <Text>Insert Image Here Later</Text>
        </Link>
        </Box>
      <Stack height={100} justify={"flex-end"} sx={{ flexDirection: "row" }}>
        <NavLink href="/about"  >About</NavLink>
        <NavLink href="/tutorial"  >Get Started</NavLink>
      </Stack>
    </Box>
  );
}
