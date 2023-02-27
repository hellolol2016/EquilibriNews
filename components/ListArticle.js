import { Box, Button, Image, Text } from "@mantine/core";
import {BsFillTrashFill} from "react-icons/bs"
import Link from "next/link";
export default function ListArticle({ title, type, url, source,ind }) {

  const removeFromList = () => {
    let x = JSON.parse(localStorage.getItem("list"));
    x.splice(ind, 1);
    localStorage.setItem(
      "list",
      //JSON.stringify({ "list": thing }, null, 2)
      JSON.stringify(
        x
      )
    );
  }



  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Box
        sx={{
          width: "25vw",
          minWidth: "300px",
          height: "10vw",
          minHeight: "150px",
          boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
          "&:hover": {
            boxShadow: "rgba(0, 0, 0, 0.35) 2.4px 2.4px 3.2px",
          },
          backgroundColor:"#e7ffdb"
        }}
      >
        <Text style={{ fontSize: "15px", fontWeight: "bold" }}>{title}</Text>
        <Text>{type}</Text>
        <Image width={"50px"} src={`/media/${source}.png`} />

        <Button onClick={()=>removeFromList(ind)}><BsFillTrashFill /></Button>
      </Box>
    </a>
  );
}
