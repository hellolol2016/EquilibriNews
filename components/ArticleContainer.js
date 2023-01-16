import { Box, Center, SimpleGrid } from "@mantine/core";
import { useEffect, useState } from "react";
import Article from "./Article";

export default function ArticleContainer({ props, rating }) {
  const [allArticles, setAllArticles] = useState([]);
  useEffect(function () {
    const dm = JSON.parse(localStorage.getItem("dm")).dm;
    const abc = JSON.parse(localStorage.getItem("abc")).abc;
    const fox = JSON.parse(localStorage.getItem("fox")).fox;
    const nyt = JSON.parse(localStorage.getItem("nyt")).nyt;
    const r = JSON.parse(localStorage.getItem("r")).r;
    const wsj = JSON.parse(localStorage.getItem("wsj")).wsj;
    const vox = JSON.parse(localStorage.getItem("vox")).vox;
    console.log(typeof(dm));
    setAllArticles([].concat(dm,abc))
    if (rating >= 0) {
      if (rating < 2) {
        console.log("far left");
        setAllArticles([].concat(r,fox,dm,wsj))
      } else if (rating < 4) {
        console.log("mid left");
        setAllArticles([].concat(r,fox,dm,wsj))
      } else if (rating < 7) {
        console.log("neutral");
        setAllArticles([].concat(r,nyt,wsj))
      } else if (rating < 9) {
        console.log("mid right");
        setAllArticles([].concat(abc,nyt,wsj,r))
      } else if (rating < 11) {
        console.log("far right");
        setAllArticles([].concat(abc,nyt,wsj,vox))
      } else {
        console.log("errror");
      }
    }
  },[rating]);

  console.log(allArticles);
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1080, cols: 3, spacing: "md" },
        { maxWidth: 955, cols: 2, spacing: "sm" },
        { maxWidth: 650, cols: 1, spacing: "sm" },
      ]}
    >
            {allArticles.map((article) => {
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

//export async function getStaticProps() {
//const dm = localStorage.getItem("dm")
//const abc = localStorage.getItem("abc")
//const fox = localStorage.getItem("fox")
//const nyt = localStorage.getItem("nyt")
//const r = localStorage.getItem("r")
//const wsj = localStorage.getItem("wsj")
//const vox = localStorage.getItem("vox")
//return {
//props: { dm:dm, abc:abc, fox:fox, nyt:nyt, r:r, wsj:wsj, vox:vox },
//};
//}
