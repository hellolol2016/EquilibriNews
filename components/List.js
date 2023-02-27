import { Box, Center, SimpleGrid } from "@mantine/core";
import { useEffect, useState } from "react";
import ListArticle from "./ListArticle";


export default function ArticleContainer({ props, rating }) {
  const [list , setList] = useState([]);

  useEffect(
    function () {
      setList(JSON.parse(localStorage.getItem("list")))
    },
    [rating]
  );

  return (
    <Center >
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1080, cols: 3, spacing: "md" },
          { maxWidth: 955, cols: 2, spacing: "sm" },
          { maxWidth: 650, cols: 1, spacing: "sm" },
        ]}
      >
        {list.map((article,index) => {
          return (
            <Center key={article.title}>
              <ListArticle
                key={article.title}
                title={article.title}
                type={article.type}
                url={article.url}
                source={article.source}
                ind={index}
              />
            </Center>
          );
        })}
      </SimpleGrid>
    </Center>
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
