import { Box, Center, SimpleGrid } from "@mantine/core";
import Article from "./Article";

export default function ArticleContainer({ props, rating }) {
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
      farticle = [...wsj.articles,...r.articles, ...nyt.articles];
    } else if (rating < 9) {
      console.log("mid right");
      farticle = [
        ...wsj.articles,
        ...abc.articles,
        ...r.articles,
        ...nyt.articles,
      ];
    } else if (rating < 11) {
      console.log("far right");
      farticle = [
        ...nyt.articles,
        ...wsj.articles,
        ...abc.articles,
        ...vox.articles,
      ];
    } else {
      console.log("errror");
    }
  }
  console.log(farticle);

  console.log(Object.keys(r.articles).length);
  console.log(Object.keys(wsj.articles).length);
  console.log(Object.keys(nyt.articles).length);
  return (
    <SimpleGrid cols={3} breakpoints={[
        { maxWidth: 1080, cols: 3, spacing: 'md' },
        { maxWidth: 955, cols: 2, spacing: 'sm' },
        { maxWidth: 650, cols: 1, spacing: 'sm' },
      ]}>
      {farticle.map((article) => {
        return (
          <Center key={article.title}>
            <Article
              key={article.title}
              title={article.title}
              type={article.type}
              source={article.source}
            />
          </Center>
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
import vox from "../public/articles/vox.json";
export async function getStaticProps() {
  return {
    props: { dm, abc, fox, nyt, r, wsj, vox },
  };
}
