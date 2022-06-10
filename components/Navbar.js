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
  Image,
} from "@mantine/core";
import Link from "next/link";
import useStyles from "../pages/styles";

const NavLink = ({ children, href }) => {
  const theme = useMantineTheme();

  const { classes } = useStyles();
  return (
    <Link href={href} passHref>
      <Text
        style={{ color: theme.colors.gray[0] }}
        className={classes.noSelect}
      >
        {children}
      </Text>
    </Link>
  );
};

export default function AppShellDemo() {
  return (
    <Box p="">
      <Box fixed sx={{ position: "absolute" }}>
        <Link href="/">
        <Image src={"/media/en.png"} alt="en" height={"45px"} /> 
        </Link>
      </Box>
      <Stack height={100} justify={"flex-end"} sx={{ flexDirection: "row" }}>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/tutorial">Get Started</NavLink>
      </Stack>
    </Box>
  );
}
