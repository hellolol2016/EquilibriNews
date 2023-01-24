import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Text,
  Stack,
  Center,
} from "@mantine/core";
import { HiClipboardList } from "react-icons/hi";
import { AiFillRead,AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";
import { useState,useEffect } from "react";
const Thing = ({ num, img, title, link, source }) => {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      sx={{ width: "40vw", minWidth: "500px" }}
    >
      <Card.Section>
        <Image src={img} height={"30vh"} alt={title}/>
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {/* CHANGE COLOR */}
        <Badge color="" variant="light">
          {source}
        </Badge>
      </Group>
      <Group dir="row" grow>
          <a href={link} target="_blank" rel="noreferrer">
        <Button
          variant="light"
          color="blue"
          mt="md"
          radius="md"
          sx={{ width:"100%",height:"40px" }}
        >
            <AiFillRead fontSize={"30px"} />
        </Button>
          </a>
        <Button
          variant="light"
          color="green"
          mt="md"
          radius="md"
          sx={{ width: "20%",height:"40px" }}
        >
          <HiClipboardList fontSize={"30px"} />
        </Button>
      </Group>
    </Card>
  );
};

export default function Gallery({gal}) {
  const [index, setIndex] = useState(0); 
  const [articles, setArticles] = useState({});

  const nextSlide =() =>{
    setIndex((oldIndex)=>{
      let index = oldIndex + 1;
      if(index > articles.length-1){
        index = 0;
      }
      return index;
    })
  }
  const prevSlide =() =>{
    console.log("object");
  setIndex((oldIndex)=>{
      let index = oldIndex - 1;
      if(index < 0){
        index = articles.length-1;
      }
      return index;
    })
  }
  console.log(gal);
  return (
    <Center sx={{ height: "100vh" }}>
      <Box><AiFillLeftCircle fontSize={"40px"} onClick={prevSlide}/></Box>
      <Thing
        num="1"
        img="https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming.jpg"
        title="Duck - the duck"
        link="https://kids.nationalgeographic.com/animals/birds/facts/mallard-duck"
        source="abc"
      />
      <Box><AiFillRightCircle fontSize={"40px"} onClick={nextSlide}/></Box>
    </Center>
  );
}
