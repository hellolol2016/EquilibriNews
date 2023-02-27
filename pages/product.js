import { Box, Button, Center, Stack } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleContainer from "../components/ArticleContainer";
import Gallery from "../components/Gallery";
import { Bars } from "react-loading-icons";
import Header from "../components/Header";
import { NextLink } from "@mantine/next";
import List from "../components/List"
export default function Page(props) {
  const [rating, setRating] = useState("");
  const [isGallery, setIsGallery] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [galLoading, setGalLoading] = useState(true);

  async function handleNewsClick() {
    setLoading(true);
    const res = await fetch("/api/puppeteer");
    const data = await res.json();

    window.localStorage.setItem(
      "abc",
      JSON.stringify({ abc: data.abc }, null, 2)
    );
    window.localStorage.setItem("nm", JSON.stringify({ nm: data.nm }, null, 2));
    window.localStorage.setItem(
      "fox",
      JSON.stringify({ fox: data.fox }, null, 2)
    );
    window.localStorage.setItem(
      "nyt",
      JSON.stringify({ nyt: data.nyt }, null, 2)
    );
    window.localStorage.setItem("r", JSON.stringify({ r: data.r }, null, 2));
    window.localStorage.setItem(
      "vox",
      JSON.stringify({ vox: data.vox }, null, 2)
    );
    window.localStorage.setItem(
      "wsj",
      JSON.stringify({ wsj: data.wsj }, null, 2)
    );
    window.localStorage.setItem("lastCheck", rn);
    setLoading(false);
    console.log("data :" + data);
    console.log(data);
  }
  const setGallery = (arr) => {
    window.localStorage.setItem("gal", JSON.stringify(arr, null, 2));
  };
  const getFirstFour = (arr) => {
    return arr?.slice(0, 4);
  };
  let rn = new Date();
  useEffect(
    function () {
      setRating(window.localStorage.getItem("rating"));
      let userRating = window.localStorage.getItem("rating");
      let last = window.localStorage.getItem("lastCheck");
      if (last == null || rn - new Date(last) > 10800000) {
        handleNewsClick();
      } else {
        setLoading(false);
        console.log("less than 3 hr");
      }

      if (rating >= 0 && isLoading == false) {
        const nm = JSON.parse(window.localStorage.getItem("nm"))?.nm;
        const abc = JSON.parse(window.localStorage.getItem("abc"))?.abc;
        const fox = JSON.parse(window.localStorage.getItem("fox"))?.fox;
        const nyt = JSON.parse(window.localStorage.getItem("nyt"))?.nyt;
        const r = JSON.parse(window.localStorage.getItem("r"))?.r;
        const wsj = JSON.parse(window.localStorage.getItem("wsj"))?.wsj;
        const vox = JSON.parse(window.localStorage.getItem("vox"))?.vox;
        if (rating < 2) {
          setGallery(
            getFirstFour(r).concat(
              ...getFirstFour(fox),
              ...getFirstFour(nm),
              ...getFirstFour(wsj)
            )
          );
        } else if (rating < 4) {
          setGallery(
            getFirstFour(r).concat(
              ...getFirstFour(fox),
              ...getFirstFour(nm),
              ...getFirstFour(wsj)
            )
          );
        } else if (rating < 7) {
          setGallery(
            getFirstFour(r).concat(...getFirstFour(nyt), ...getFirstFour(wsj))
          );
        } else if (rating < 9) {
          setGallery(
            getFirstFour(abc).concat(
              ...getFirstFour(nyt),
              ...getFirstFour(wsj),
              ...getFirstFour(r)
            )
          );
        } else if (rating < 11) {
          setGallery(
            getFirstFour(abc).concat(
              ...getFirstFour(nyt),
              ...getFirstFour(wsj),
              ...getFirstFour(vox)
            )
          );
        } else {
          console.log("errror");
        }
        setGalLoading(false);
      } else {
        console.log("still loading");
      }
    },
    [isLoading]
  );
  return (
    <Box>
      <Header />
      {isLoading ? (
        <Center sx={{ height: "100vh" }}>
          <Bars stroke="#000000" />
        </Center>
      ) : isGallery && !galLoading ? (
        <>
          <Stack>
            <Gallery rating={rating} />
            <Center>
              <Button
                onClick={() => setIsGallery(false)}
                sx={{ width: "300px" }}
              >
                All Articles
              </Button>
            </Center>
          </Stack>
        </>
      ) : (
        <>
          <Box
            sx={{
              position: "fixed",
              top: "300px",
              right: "0",
              background: "gray",
              padding: "30px",
            }}
          >
            <Button onClick={() => setIsGallery(true)}>Gallery</Button>
          </Box>
          <List />
          <ArticleContainer rating={rating} />
        </>
      )}
    </Box>
  );
}
