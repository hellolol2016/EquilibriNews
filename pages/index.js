import Head from "next/head";
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Grid,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import useStyles from "./styles"
import {BsInstagram,BsGithub,BsYoutube} from "react-icons/bs"
import Footer from "../components/Footer"
export default function Home() {
  const {classes} = useStyles()  
  const NewsSource = (props) => {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignSelf: "center",padding:"10%" }}
      >
        <Image
          src={`/media/${props.img}.png`}
          alt={props.alt}
          width={200}
          height={props.h}
        />
      </Box>
    );
  };

  return (<>
    <Head>
      <title>EQ News</title> 
      <link rel = "icon" href="/media/en.png"></link>
      </Head> 
    <Stack>
      <Center sx={{color:"white"}}>
        <BackgroundImage src="/media/background.jpg" opacity>
          <Navbar />
          <Stack align="center" sx={{ height: "85vh" }} justify="center">
            <Title className={classes.whiteFont}>EquilibriNews</Title> 
            <Text className={classes.whiteFont}>Only facts.</Text>
          </Stack>
        </BackgroundImage>
      </Center>
      <Stack align="center">
        <h2>Sources</h2>
        <SimpleGrid cols={3} sx={{margin:"20px"}}>
          <NewsSource img="abc" alt={"abc news"} h={200} />
          <NewsSource img="wsj" alt={"wall street journal"} h={200} />
          <NewsSource img="nyt" alt={"new york times"} h={150} />
          <NewsSource img="fox" alt={"fox news"} h={200} />
          <NewsSource img="cnn" alt={"cnn"} h={200} />
          <NewsSource img="dm" alt={"dm"} h={100} />
        </SimpleGrid>
      </Stack>
       <Footer></Footer> 
        
        

    </Stack></>
  );
}
