import { Box, Stack, Text } from "@mantine/core";
export default function Article({title,type,url}){
  return(
  <Stack>
    <Text>{title}</Text>
  <Text>{type}</Text>
  </Stack>
  )
}