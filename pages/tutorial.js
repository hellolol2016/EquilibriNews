import {
  Button,
  Center,
  Slider,
  Space,
  Stack,
  Text,
  Title,
  Box,
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Page() {
  const [value, setValue] = useState(5)
  const [back, setBack] = useState(false)
  useEffect(function () {
    if (localStorage.getItem('rating') !== null) {
      setBack(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Tutorial</title>
        <link rel="icon" href="/media/en.png"></link>
      </Head>

      <Center>
        <Stack style={{ width: '50%' }}>
          <Title>Welcome to EquilibriNews!</Title>
          <Text>
            Looks like we dont have your user info on this device, lets fix
            that!
          </Text>
          <Text color={'blue'}>
            <a
              rel="noreferrer"
              href="https://docs.google.com/document/d/1qfKZEnEjxyAQMllxUoKbtM2l3KEgMBKOP4O7XTwQ8J0/edit?usp=sharing"
              target="_blank"
            >
              Political Alignment Surveys
            </a>
          </Text>
          <Slider
            max="10"
            onChangeEnd={setValue}
            defaultValue={5}
            marks={[
              { value: 0, label: 'Far Left' },
              { value: 10, label: 'Far Right' },
              { value: 5, label: 'Neutral' },
            ]}
            label={null}
          ></Slider>
          <Space></Space>
          <Button
            onClick={function () {
              localStorage.setItem('rating', value)
              toast.success('Rating Updated!', { draggable: true })
              setBack(true)
            }}
          >
            Set Rating
          </Button>
          {back && (
            <Box>
              <Text>
                Now that you&apos;ve set up your political alignment, feel free
                to access your news here!
              </Text>
              <NextLink href="/product">
                <Button> My News</Button>
              </NextLink>
            </Box>
          )}
        </Stack>
      </Center>
      <ToastContainer />
    </>
  )
}
