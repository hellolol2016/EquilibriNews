import { Box, Stack, Text } from "@mantine/core";
export default function Article({title,type,url,source}){
  return(
    <Box style={{width:"300px"}}>
    <Text style={{fontSize:"15px", fontWeight:"bold"}}>{title}</Text>

  <Text>{type}</Text>
  <Text>{source}</Text>
  </Box>
  )
}