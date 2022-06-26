import { Box } from "@mantine/core";
import Article from "./Article";

export default function ArticleContainer({props, rating}) {
  console.log(data.articles[0]);
  const articles  = data.articles[0]
  console.log(rating);
  return <Box>{
      articles.map((article)=>{
        return(
          <Article key={article.title} title={article.title} type={article.type} />


        )
      })
    
    }</Box>;
}

import data from "../public/articles/dm.json";

export async function getStaticProps() {
  const rating = localStorage.getItem("rating");
  console.log("jahggy" + rating);
  return {
    props: {data },
  };
}
