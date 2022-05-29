import Head from "next/head";
import Image from "next/image";
import { Center, Stack } from "@mantine/core";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <Stack>
      <Navbar> </Navbar>
      <Center>
        <h1>EquilibriNews</h1>
      </Center>
    </Stack>
  );
}
