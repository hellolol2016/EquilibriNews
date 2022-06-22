import { Box } from "@mantine/core";
import Article from "./Article";

export default function ArticleContainer(props) {
  const articles = props.articles;
  console.log( props); 
  return (
    <Box>
      {articles}
    </Box>
  );
}

import path from 'path'
export async function getStaticProps() {

  const fs = require("fs").promises
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fs.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  let rating = localStorage.getItem("rating")
  return {
    props: objectData,
    rating:rating

  }
}