import { Box, Center, SimpleGrid } from "@mantine/core";
import { useEffect } from "react";
import Article from "./Article";

export default function ArticleContainer({ props, rating }) {
 useEffect(function(){
  const dm = localStorage.getItem("dm")
  const abc = localStorage.getItem("abc")
  const fox = localStorage.getItem("fox")
  const nyt = localStorage.getItem("nyt")
  const r = localStorage.getItem("r")
  const wsj = localStorage.getItem("wsj")
  const vox = localStorage.getItem("vox")
 }) 
  console.log("heoolo"+props);
  const farticle=[];
  console.log(farticle);

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
