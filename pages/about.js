import { Box, Center, Stack, Text, Title } from '@mantine/core'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Stack>
        <Box sx={{ color: 'white', backgroundColor: 'black', height: '75px' }}>
          <Navbar />
        </Box>
        <Center>
          <Center
            sx={{ width: '60%', flexDirection: { md: 'row', base: 'column' } }}
          >
            <Stack>
              <Title>Why?</Title>
              <Text sx={{ width: '90%', textAlign: 'center' }}>
                In modern society, it’s nearly impossible to find the truth,
                buried underneath layers of prejudice. EquilibriNews aims to
                uncover said truth by providing the user with news articles from
                sources that are on the opposite side of the user’s political
                spectrum. EquilibriNews will be a website application, so anyone
                can access it on any device with a browser.<br></br>
                <br></br>
                For the majority of people that have a political stance,
                EquilibriNews will try to balance the user’s views on certain
                life-changing topics. Seeing things from a different point of
                view is a major step in revealing the truth. Those that are new
                to politics (teenagers, young adults, etc.) can use this tool to
                gain a better understanding of the politics that drive the way
                our world works. The app is not a blog or a news publishing
                site, its sole purpose is to try to give the user a different
                perspective so they can decide for themselves what is true.
                <br></br>
                <br></br>
                EqulibriNews utilizes mainstream political tests such as the
                Political Typology Test from Pew Research Center to judge a
                person’s political alignment. Then it fetches news articles from
                a NewsAPI, which includes a variety of sources and displays it
                for the user. If the user has a political position, the app will
                aim to show more news on the other side of the political
                spectrum. For someone that is new to politics, the website will
                contain equal information of both liberal and conservative views
                on trending topics. However, if the user is determined to be
                politically aligned to a certain party, there will be more
                articles from news sources on the other side of the political
                spectrum.<br></br>
              </Text>
            </Stack>
            <Box sx={{ display: 'flex', width: '500px', height: '100%' }}>
              <Image
                src="/media/speaker.png"
                alt="speaker"
                layout="fixed"
                height="300"
                width="250"
              />
            </Box>
          </Center>
        </Center>
        <Footer></Footer>
      </Stack>
    </>
  )
}
