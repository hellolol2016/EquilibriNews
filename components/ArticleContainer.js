import { Box } from "@mantine/core";
import Article from "./Article";

export default function ArticleContainer(props) {
  console.log( data.articles); 
  return (
    <Box>
      {props.rating}
    </Box>
  );
}

import data from "../public/articles/dm.json"

export async function getStaticProps() {
  const rating = localStorage.getItem("rating")
  return {
    props:{data:data,rating:rating}
  }
}