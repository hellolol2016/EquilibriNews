import { Box, Button, Center } from '@mantine/core'
import { useEffect, useState } from 'react'
import ArticleContainer from '../components/ArticleContainer'
import Gallery from '../components/Gallery'
import { Bars } from 'react-loading-icons'
import Header from '../components/Header'

export default function Page(props) {
  const [rating, setRating] = useState('')
  const [isGallery, setIsGallery] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const [galLoading, setGalLoading] = useState(true)

  async function handleNewsClick() {
    setLoading(true)
    const res = await fetch('/api/scrapeNews')
    const data = await res.json()

    window.localStorage.setItem(
      'abc',
      JSON.stringify({ abc: data.abc }, null, 2)
    )
    window.localStorage.setItem('nm', JSON.stringify({ nm: data.nm }, null, 2))
    window.localStorage.setItem(
      'fox',
      JSON.stringify({ fox: data.fox }, null, 2)
    )
    window.localStorage.setItem(
      'nyt',
      JSON.stringify({ nyt: data.nyt }, null, 2)
    )
    window.localStorage.setItem('r', JSON.stringify({ r: data.r }, null, 2))
    window.localStorage.setItem(
      'vox',
      JSON.stringify({ vox: data.vox }, null, 2)
    )
    window.localStorage.setItem(
      'wsj',
      JSON.stringify({ wsj: data.wsj }, null, 2)
    )
    window.localStorage.setItem('lastCheck', rn)
    setLoading(false)
    console.log('data', data)
  }

  const setGallery = (arr) => {
    window.localStorage.setItem('gal', JSON.stringify(arr, null, 2))
  }

  const getFirstFour = (arr) => {
    return arr?.slice(0, 4)
  }

  let rn = new Date()
  useEffect(
    function () {
      setRating(window.localStorage.getItem('rating'))
      let userRating = window.localStorage.getItem('rating')
      let last = window.localStorage.getItem('lastCheck')
      if (last == null || rn - new Date(last) > 10800000) {
        handleNewsClick()
      } else {
        setLoading(false)
        console.log('less than 3 hr')
      }
      if (userRating > 0 && isLoading == false) {
        const nm = JSON.parse(window.localStorage.getItem('nm'))?.nm
        const abc = JSON.parse(window.localStorage.getItem('abc'))?.abc
        const fox = JSON.parse(window.localStorage.getItem('fox'))?.fox
        const nyt = JSON.parse(window.localStorage.getItem('nyt'))?.nyt
        const r = JSON.parse(window.localStorage.getItem('r'))?.r
        const wsj = JSON.parse(window.localStorage.getItem('wsj'))?.wsj
        const vox = JSON.parse(window.localStorage.getItem('vox'))?.vox
        if (userRating < 2) {
          setGallery(
            getFirstFour(r).concat(
              ...getFirstFour(fox),
              ...getFirstFour(nm),
              ...getFirstFour(wsj)
            )
          )
        } else if (userRating < 4) {
          setGallery(
            getFirstFour(r).concat(
              ...getFirstFour(fox),
              ...getFirstFour(nm),
              ...getFirstFour(wsj)
            )
          )
        } else if (userRating < 7) {
          setGallery(
            getFirstFour(r).concat(...getFirstFour(nyt), ...getFirstFour(wsj))
          )
        } else if (userRating < 9) {
          setGallery(
            getFirstFour(abc).concat(
              ...getFirstFour(nyt),
              ...getFirstFour(wsj),
              ...getFirstFour(r)
            )
          )
        } else if (userRating < 11) {
          setGallery(
            getFirstFour(abc).concat(
              ...getFirstFour(nyt),
              ...getFirstFour(wsj),
              ...getFirstFour(vox)
            )
          )
        } else {
          console.log('errror')
        }
        setGalLoading(false)
      } else {
        console.log('still loading')
      }
    },
    [isLoading]
  )
  return (
    <Box>
      <Header />
      {isLoading ? (
        <Center sx={{ height: '100vh' }}>
          <Bars stroke="#000000" />
        </Center>
      ) : isGallery && !galLoading ? (
        <>
          <Gallery rating={rating} />
          <Button onClick={() => setIsGallery(false)}> </Button>
        </>
      ) : (
        <>
          <ArticleContainer rating={rating} />
          <Button onClick={() => setIsGallery(true)}> </Button>
        </>
      )}
    </Box>
  )
}
