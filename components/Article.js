/* eslint-disable prettier/prettier */
import { Box, Image, Text } from '@mantine/core'
import Link from 'next/link'
export default function Article({ title, type, url, source }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Box
        sx={{
          width: '25vw',
          minWidth: '300px',
          height: '10vw',
          minHeight: '150px',
          boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
          '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.35) 2.4px 2.4px 3.2px',
          },
        }}
      >
        <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>{title}</Text>
        <Text>{type}</Text>
        <Image width={'50px'} src={`/media/${source}.png`} />
      </Box>
    </a>
  )
}
