import { Box, Image, Space, Stack, Text } from "@mantine/core";
export default function Article({ title, type, url, source }) {
  return (
    <Box
      style={{
        width: "25vw",
        minWidth: "300px",
        height: "10vw",
        minHeight:"150px",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      }}
    >
      <Text style={{ fontSize: "15px", fontWeight: "bold" }}>{title}</Text>
      <Text>{type}</Text>
      <Image  width={"50px"} src={`/media/${source}.png`}/>
    </Box>
  );
}
