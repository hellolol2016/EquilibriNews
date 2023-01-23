import { Box, Center } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleContainer from "../components/ArticleContainer";
import { Bars } from "react-loading-icons";
import Header from "../components/Header";
export default function Page(props) {
  const [rating, setRating] = useState("");
  async function handleNewsClick() {

    setLoading(true);
    const res = await fetch("/api/puppeteer");
    const data = await res.json();

    window.localStorage.setItem("abc", JSON.stringify({"abc":data.abc}, null, 2));
    window.localStorage.setItem("nm", JSON.stringify({"nm":data.nm}, null, 2));
    window.localStorage.setItem("fox", JSON.stringify({"fox":data.fox}, null, 2));
    window.localStorage.setItem("nyt", JSON.stringify({"nyt":data.nyt}, null, 2));
    window.localStorage.setItem("r", JSON.stringify({"r":data.r}, null, 2));
    window.localStorage.setItem("vox", JSON.stringify({"vox":data.vox}, null, 2));
    window.localStorage.setItem("wsj", JSON.stringify({"wsj":data.wsj}, null, 2));
    setLoading(false);
    window.localStorage.setItem("lastCheck", rn);
    console.log("data :"+data);
    console.log(data);
  }

  const [isLoading, setLoading] = useState(false);
  let rn = new Date();
  useEffect(function () {
    setRating(window.localStorage.getItem("rating"));
    let last = window.localStorage.getItem("lastCheck");
    if (last == null || rn - new Date(last) > 10800000) {
      handleNewsClick();
    } else {
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
    <Box>
      <Header />
      {isLoading ? (
        <Center sx={{ height: "100vh" }}>
          <Bars stroke="#000000" />
        </Center>
      ) : (
        <ArticleContainer rating={rating} />
      )}
    </Box>
  );
}
