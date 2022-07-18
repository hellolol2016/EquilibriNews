import { Box, SimpleGrid } from "@mantine/core";
import Article from "./Article";

export default function ArticleContainer({props, rating}) {
  const articles  = abc.articles
  return <SimpleGrid cols={3}>{
      articles.map((article)=>{
        return(
          <Article key={article.title} title={article.title} type={article.type} />


        )
      })
    
    }</SimpleGrid>;
}

import dm from "../public/articles/dm.json";
import abc from "../public/articles/abc.json";
import fox from "../public/articles/fox.json";
import nyt from "../public/articles/nyt.json";
import r from "../public/articles/r.json";
import wsj from "../public/articles/wsj.json";
export async function getStaticProps() {
  const rating = localStorage.getItem("rating");
  return {
    props: {dm,abc,fox,nyt,r,wsj},
  };
}
