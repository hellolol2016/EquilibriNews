import { Text, useMantineTheme, Stack, Box, Image } from '@mantine/core'
import Link from 'next/link'
import useStyles from '../public/styles'
import { useEffect, useState } from 'react'
const NavLink = ({ children, href, ...props }) => {
  const theme = useMantineTheme()

  const { classes } = useStyles()
  return (
    <Link href={href} passHref>
      <Text
        sx={{ color: theme.colors.gray[0], '&:hover': { color: 'gray' } }}
        className={classes.noSelect}
      >
        {children}
      </Text>
    </Link>
  )
}

export default function Nav() {
  const [rating, setRating] = useState('')
  let user = useEffect(function () {
    setRating(localStorage.getItem('rating'))
  }, [])

  return (
    <Box sx={{ backgroundColor: 'black', height: '65px', padding: '10px' }}>
      <Box fixed="true" sx={{ position: 'absolute' }}>
        <Link passHref href="/" legacyBehavior>
          <Image src={'/media/en.png'} alt="en" height={'45px'} />
        </Link>
      </Box>
      <Stack height={100} justify={'flex-end'} sx={{ flexDirection: 'row' }}>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/tutorial">Change preferences</NavLink>
      </Stack>
    </Box>
  )
}
