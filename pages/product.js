import { Box } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import ArticleContainer from "../components/ArticleContainer" 
export default function Page(props) {
  const [rating,setRating] = useState(""); 
  
  useEffect(function () {
     setRating(window.localStorage.getItem("rating"))
  }, []);

  if (rating > 0) {
    if (rating < 2) {
      console.log("far left");
    } else if (rating < 4) {
      console.log("mid left");
    } else if (rating < 7) {
      console.log("neutral");
    } else if (rating < 9) {
      console.log("mid right");
    } else if (rating < 11) {
      console.log("far right");
    } else {
      console.log("errror");
    }
  }

  return <Box>
      <ArticleContainer  />

  </Box>;
}
