import {
  Box,
  Button,
  Center,
  Header,
  Slider,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Page() {
  const [value, setValue] = useState(5);
  return (
    <>
      <Head>
        <title>Tutorial</title>
        <link rel="icon" href="/media/en.png"></link>
      </Head>

      <Center>
        <Stack style={{ width: "50%" }}>
          <Title>Welcome to EquilibriNews!</Title>
          <Text>
            Looks like we dont have your user info on this device, lets fix
            that!
          </Text>
          <a
            rel="noreferrer"
            href="https://docs.google.com/document/d/1qfKZEnEjxyAQMllxUoKbtM2l3KEgMBKOP4O7XTwQ8J0/edit?usp=sharing"
            target="_blank"
          >
            Political Alignment Surveys
          </a>

          <Slider
            max="10"
            onChangeEnd={setValue}
            marks={[
              { value: 0, label: "Far Left" },
              { value: 10, label: "Far Right" },
              { value: 5, label: "Neutral" },
            ]}
          ></Slider>
          <Space></Space>
          <Button
            onClick={function () {
              localStorage.setItem("rating", value);
              toast.success("Rating Updated!", { draggable: true });
            }}
          >
            Set Rating
          </Button>

            <Text>Now that you've set up your political alignment, I'll redirect you to the actual articles! They take up to 2 minutes to completely load, so hold on!</Text>

        </Stack>
      </Center>
      <ToastContainer />
    </>
  );
}
