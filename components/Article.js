import { Box, Stack, Text } from "@mantine/core";
export default function Article({title,type,url}){
  return(
  <Stack>
    <Text style={{fontSize:"20px"}}>{title}</Text>
  <Text>{type}</Text>
  </Stack>
  )
}