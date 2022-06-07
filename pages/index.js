import Head from "next/head";
import {
  Box,
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
import Image from "next/image";
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
        <SimpleGrid cols={3}>
          <Box>
            <Image src="../media/abc.png"  width={200} height={200}/>
            ABC News</Box>
          <Box>Fox News</Box>
          <Box>New York Times</Box>

          <Box>ABC News</Box>
          <Box>Fox News</Box>
          <Box>New York Times</Box>



        </SimpleGrid>
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
