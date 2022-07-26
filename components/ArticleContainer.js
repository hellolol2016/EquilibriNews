import { Box, SimpleGrid } from "@mantine/core";
import Article from "./Article";

export default function ArticleContainer({ props, rating }) {
  const barticles = abc.articles;
  let farticle = [];
  if (rating >= 0) {
    if (rating < 2) {
      console.log("far left");
      farticle = [
        ...r.articles,
        ...fox.articles,
        ...dm.articles,
        ...wsj.articles,
      ];
    } else if (rating < 4) {
      console.log("mid left");
      farticle = [
        ...r.articles,
        ...fox.articles,
        ...dm.articles,
        ...wsj.articles,
      ];
    } else if (rating < 7) {
      console.log("neutral");
      farticle = [...r.articles, ...wsj.articles, ...nyt.articles];
    } else if (rating < 9) {
      console.log("mid right");
      farticle = [
        ...ws.articles,
        ...abc.articles,
        ...r.articles,
        ...nyt.articles,
      ];
    } else if (rating < 11) {
      console.log("far right");
      farticle = [...nyt.articles, ...ws.articles, ...abc.articles];
    } else {
      console.log("errror");
    }
  }
  console.log(farticle);
  console.log(barticles);
  return (
    <SimpleGrid cols={3}>
      {farticle.map((article) => {
        return (
          <Article
            key={article.title}
            title={article.title}
            type={article.type}
            source={article.source}
          />
        );
      })}
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
    props: { dm, abc, fox, nyt, r, wsj },
  };
}
