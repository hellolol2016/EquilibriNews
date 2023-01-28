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
import {
  AiFillRead,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import {Bars} from "react-loading-icons";
import "animate.css"
const Thing = ({ num, img, title, link, source,flip,setFlip }) => {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      sx={{ width: "40vw", minWidth: "500px", margin:"50px"}}
      className={flip?"animate__animated animate__flipInX":""}
      onAnimationEnd={()=>setFlip(false)}
    >
      <Card.Section>
        <Image src={img} height={"30vh"} alt={title} />
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
            sx={{ width: "100%", height: "40px" }}
          >
            <AiFillRead fontSize={"30px"} />
          </Button>
        </a>
        <Button
          variant="light"
          color="green"
          mt="md"
          radius="md"
          sx={{ width: "20%", height: "40px" }}
        >
          <HiClipboardList fontSize={"30px"} />
        </Button>
      </Group>
    </Card>
  );
};
export default function Gallery({rating}) {
  const [index, setIndex] = useState(0);
  const [gal,setGal] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [flip, setFlip] = useState(false);
  useEffect(function () {
    setGal(JSON.parse(localStorage.getItem("gal")))
    setIsLoading(false);
    console.log("setgal");
  },[rating]);
  const nextSlide = () => {
    setFlip(true);
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > gal.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setFlip(true);
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = gal.length - 1;
      }
      return index;
    });
  };
  console.log(gal);
  return (
<Box>
    { !isLoading?(
      <Center sx={{height:"80vh"}}>
        <Group spacing="md">
          <Box >
            <AiFillLeftCircle fontSize={"40px"} onClick={prevSlide} />
          </Box>
          <Thing
            num={index}
            title={gal[index].title}
            img={gal[index].img}
            link={gal[index].url}
            source={gal[index].source}
            flip={flip}
            setFlip = {setFlip}
          />
          <Box>
            <AiFillRightCircle fontSize={"40px"} onClick={nextSlide} />
          </Box>
        </Group>
</Center>
        ):(
        
        <Center sx={{ height: "100vh" }}>
          <Bars stroke="#000000" />
        </Center>
        )

    }
    </Box>
  );
}
