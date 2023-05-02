import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: string
}

export const Skill = ({ children }: Props) => {
  return (
    <Box mb={"1%"} mx={"1%"} textAlign={"center"}>
      <img src={"/img/" + children + ".png"} />
      <Text m={4} fontSize={"4xl"} fontWeight={"bold"}>{children}</Text>
    </Box>
  )
}

function Skills() {
  const list = ["Python", "TypeScript", "React", "Next", "C", "HTML", "CSS", "Git", "Docker", "Linux"]

  return (
    <Box id={"Skills"} m={"auto"} minH={"100vh"} h={"fit-content"} w={"90vw"} bg={"red.100"}>
      <Heading py={"2vh"} mb={"3%"} as={"h1"} size={"4xl"} textAlign={"center"}>Skills</Heading>
      <Box justifyContent={"center"} display={"flex"} flexWrap={"wrap"}>
        {list.map((item) => <Skill key={item}>{item}</Skill>)}
      </Box>
    </Box>
  )
}

export default Skills