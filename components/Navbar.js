import { Text, useMantineTheme, Stack, Box, Image } from '@mantine/core'
import Link from 'next/link'
import useStyles from '../public/styles'
import { useEffect, useState } from 'react'
const NavLink = ({ children, href, ...props }) => {
  const theme = useMantineTheme()

  const { classes } = useStyles()
  return (
    (<Link href={href} passHref {...props}>

      <Text
        style={{ color: theme.colors.gray[0] }}
        className={classes.noSelect}
      >
        {children}
      </Text>

    </Link>)
  );
}

export default function Nav() {
  const [rating, setRating] = useState('')
  let user = useEffect(function () {
    setRating(localStorage.getItem('rating'))
  }, [])

  return (
    <Box p="">
      <Box fixed="true" sx={{ position: 'absolute' }}>
        <Link passHref href="/" legacyBehavior>
          <Image src={'/media/en.png'} alt="en" height={'45px'} />
        </Link>
      </Box>
      <Stack height={100} justify={'flex-end'} sx={{ flexDirection: 'row' }}>
        <NavLink href="/about">About</NavLink>
        {rating !== null ? (
          <NavLink href={'/product'}>My News</NavLink>
        ) : (
          <NavLink href="/tutorial">Tutorial</NavLink>
        )}
      </Stack>
    </Box>
  );
}
