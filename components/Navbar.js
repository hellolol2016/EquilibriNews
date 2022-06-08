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
} from "@mantine/core";
import Link from "next/link";
import useStyles from "../pages/styles";

const NavLink = ({href, body}) => {

  return <Link href={href} >{body}</Link>
}




export default function AppShellDemo() {
  return (
    <Box>
      <Box fixed sx={{ position:"absolute"}}>
        <Link href="/" >
          <Text>Insert Image Here Later</Text>
        </Link>
        </Box>
      <Stack height={100} justify={"flex-end"} sx={{ flexDirection: "row" }}>
        <NavLink href="/about" body="About" />
        <NavLink href="/tutorial" body="Get Started" />
      </Stack>
    </Box>
  );
}
