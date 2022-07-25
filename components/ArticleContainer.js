import { Box, SimpleGrid } from "@mantine/core";
import Article from "./Article";


export default function ArticleContainer({props, rating}) {
  const barticles  = abc.articles
  let farticle = [];
  if (rating >= 0) {
    if (rating < 2) {
      console.log("far left");
      farticle.push(r.articles) 
      farticle.push(fox.articles)
      farticle.push(dm.articles)
      farticle.push(wsj.articles)
    } else if (rating < 4) {
      console.log("mid left");
      farticle.push(r.articles) 
      farticle.push(fox.articles)
      farticle.push(dm.articles)
      farticle.push(wsj.articles)
    } else if (rating < 7) {
      console.log("neutral");
      farticle.push(r.articles) 
      farticle.push(wsj.articles)
      farticle.push(nyt.articles) 
    } else if (rating < 9) {
      console.log("mid right");
      farticle.push(wsj.articles)
      farticle.push(abc.articles)
      farticle.push(r.articles) 
      farticle.push(nyt.articles) 
    } else if (rating < 11) {
      console.log("far right");
      farticle.push(nyt.articles) 
      farticle.push(wsj.articles)
      farticle.push(abc.articles)
    } else {
      console.log("errror");
    }
  }

  return (<SimpleGrid cols={3}>{
      barticles.map((article)=>{
        return(
        <Article key={article.title} title={article.title} type={article.type} />
        )
        })
      }
    </SimpleGrid>
  );
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