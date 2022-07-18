import { Box } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleContainer from "../components/ArticleContainer";
export default function Page(props) {
  const [rating, setRating] = useState("");

  async function handleNewsClick() {
    setLoading(true);
    const res = await fetch("/api/puppeteer");
    const data = await res.json();
    setLoading(false);
    console.log(data);
  }

  const [isLoading, setLoading] = useState(false);
  const rn = new Date();
  useEffect(function () {
    setRating(window.localStorage.getItem("rating"));
    let last =  window.localStorage.getItem("lastCheck")
    if ( last == null||last - rn > 10800000) {
      handleNewsClick();
      window.localStorage.setItem("lastCheck",rn)
    }else{
      console.log("less than 3 hr");
    }
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

  return (
    <Box>{isLoading ? "LOADDING" : <ArticleContainer rating={rating} />}</Box>
  );
}
