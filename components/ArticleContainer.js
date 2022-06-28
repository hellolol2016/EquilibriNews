import { Box, SimpleGrid } from "@mantine/core";
import Article from "./Article";

export default function ArticleContainer({props, rating}) {
  const articles  = data.articles
  return <SimpleGrid cols={3}>{
      articles.map((article)=>{
        return(
          <Article key={article.title} title={article.title} type={article.type} />


        )
      })
    
    }</SimpleGrid>;
}

import data from "../public/articles/dm.json";

export async function getStaticProps() {
  const rating = localStorage.getItem("rating");
  console.log("jahggy" + rating);
  return {
    props: {data},
  };
}
