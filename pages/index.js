import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Center,
  Footer,
  Grid,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import Navbar from "../components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <Stack>
      <Navbar> </Navbar>
      <Center>
        <Stack align="center">
          <h1>EquilibriNews</h1>
          <Text>Only facts.</Text>
        </Stack>
      </Center>
      <Stack align="center">
        <h2>Sources</h2>
        <SimpleGrid></SimpleGrid>
      </Stack>
      <Footer>
        <Stack justify="center" sx={{ flexDirection: "row" }}>
          <Link href="#">
            <Button sx={{ paddingTop: "3px" }}>
              <Text>Instagram</Text>
            </Button>
          </Link>
          <Link href="#">
            <Button sx={{ paddingTop: "3px" }}>
              <Text>Github</Text>
            </Button>
          </Link>
          <Link href="#">
            <Button sx={{ paddingTop: "3px" }}>
              <Text>Youtube</Text>
            </Button>
          </Link>
        </Stack>
      </Footer>
    </Stack>
  );
}
