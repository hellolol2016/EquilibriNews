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

export default function AppShellDemo() {
  return (
    <Box>
      <Box fixed sx={{ position:"absolute"}}>
        <Link href="/" >
          <Text>Insert Image Here Later</Text>
        </Link>
        </Box>
      <Stack height={100} justify={"flex-end"} sx={{ flexDirection: "row" }}>
        <Link href="about">About</Link>
        <Link href="tutorial">Get Started</Link>
      </Stack>
    </Box>
  );
}
