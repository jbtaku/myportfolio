import { Box, Text } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Box id={"Home"} m={"auto"} minH={"100vh"} h={"fit-content"} minW={"90vw"} bg={"cyan.300"}>
        <Text textAlign={"center"} px={"6vw"} py={"40vh"} fontSize={60} color={"cyan.50"} fontWeight={"bold"}>
          Welcom to Takumi Joba&apos;s Portfolio Site</Text>
      </Box>
    </>
  )
}

export default Home