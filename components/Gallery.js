import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Text,
  Stack,
  Center,
} from '@mantine/core'
import { HiClipboardList } from 'react-icons/hi'
import { AiFillRead, AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { Bars } from 'react-loading-icons'

const text_truncate = (str, length, ending) => {
  if (length == null) {
    length = 100
  }
  if (ending == null) {
    ending = '...'
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}

const addToList = (title, link, source, type) => {
  console.log('added ' + title)
  let thing = { title: title, type: type, url: link, source: source }
  if (localStorage.getItem('list') !== null) {
    console.log(typeof JSON.parse(localStorage.getItem('list')))
    localStorage.setItem(
      'list',
      //JSON.stringify({ "list": thing }, null, 2)
      JSON.stringify(JSON.parse(localStorage.getItem('list')).concat([thing]))
    )
  } else {
    localStorage.setItem('list', JSON.stringify([].concat(thing), null, 2))
  }
}

const Thing = ({ num, img, title, link, source, pos, type }) => {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      sx={{ width: '40vw', minWidth: '500px', margin: '50px' }}
      className={pos}
      key={num}
    >
      <Card.Section>
        <Image src={img} height={'30vh'} alt={title} />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{text_truncate(title, 80)}</Text>
        {/* CHANGE COLOR */}
        <Badge color="" variant="light">
          {source}
        </Badge>
      </Group>
      <Group dir="row" grow>
        <a href={link} target="_blank" rel="noreferrer">
          <Button
            variant="light"
            color="blue"
            mt="md"
            radius="md"
            sx={{ width: '100%', height: '40px' }}
          >
            <AiFillRead fontSize={'30px'} />
          </Button>
        </a>
        <Button
          variant="light"
          color="green"
          mt="md"
          radius="md"
          sx={{ width: '20%', height: '40px' }}
          onClick={() => {
            addToList(title, link, source, type)
          }}
        >
          <HiClipboardList fontSize={'30px'} />
        </Button>
      </Group>
    </Card>
  )
}
export default function Gallery({ rating }) {
  const [index, setIndex] = useState(0)
  const [gal, setGal] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    function () {
      setGal(JSON.parse(localStorage.getItem('gal')))
      setIsLoading(false)
      console.log('setgal')
    },
    [rating]
  )
  useEffect(() => {
    const last = gal.length - 1
    if (index < 0) {
      setIndex(last)
    }
    if (index > last) {
      setIndex(0)
    }
  }, [index, gal])
  //useEffect(() => {
  //let slider = setInterval(() => {
  //console.log(index);
  //setIndex(index + 1);
  //}, 3000);
  //return () => {
  //clearInterval(slider);
  //};
  //}, [index]);
  return (
    <Box>
      {!isLoading ? (
        <Center sx={{ height: '80vh' }}>
          <Group spacing="md">
            <Box>
              <AiFillLeftCircle
                fontSize={'40px'}
                onClick={() => setIndex(index - 1)}
              />
            </Box>
            <Box className="section-center">
              <Center>
                {gal.map((article, articleIndex) => {
                  const { title, img, url, source, type } = article
                  let pos = 'next'
                  if (articleIndex === index) {
                    pos = 'active'
                  }
                  if (
                    articleIndex === index - 1 ||
                    (index === 0 && articleIndex === article.length - 1)
                  ) {
                    pos = 'last'
                  }
                  return (
                    <Thing
                      key={title}
                      num={index}
                      title={title}
                      img={img}
                      link={url}
                      source={source}
                      pos={pos}
                      type={type}
                    />
                  )
                })}
              </Center>
            </Box>
            <Box>
              <AiFillRightCircle
                fontSize={'40px'}
                onClick={() => setIndex(index + 1)}
              />
            </Box>
          </Group>
        </Center>
      ) : (
        <Center sx={{ height: '100vh' }}>
          <Bars stroke="#000000" />
        </Center>
      )}
    </Box>
  )
}
