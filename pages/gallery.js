import { Badge, Box, Button, Card, Group, Image, Text } from "@mantine/core"



const thing = (num, img, title, link,source )=>{
  <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={img}
          height={"20vh"}
        />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {/* CHANGE COLOR */}
        <Badge color="" variant="light">
         {source} 
        </Badge>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
      <Button variant="light" color="green" fullWidth mt="md" radius="md">
         
      </Button>
    </Card>
}

export default function Gallery(){

}