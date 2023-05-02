import { Box, Heading, Text } from "@chakra-ui/react"

function About() {

  return (
    <Box id={"About"} m={"auto"} minH={"100vh"} h={"fit-content"} w={"90vw"} bg={"green.100"}>
      <Heading py={"2vh"} as={"h1"} mb={"2%"} size={"4xl"} textAlign={"center"}>About Me</Heading>
      <Box display={"flex"} justifyContent={"center"}>
        <img className="myimg" style={{marginLeft: "3%"}} src={"/img/Avatar.png"} width={"30%"} height={"30%"}/>
        <Text mx={"3%"} my={"auto"} fontSize={30} fontWeight={"bold"}>
          上馬拓己です。富山県の大学院に在籍しています。趣味は音楽と散歩とドライブです。
          音楽は幅広いジャンルの音楽を聞きますが、最近はfunkやbluse、Neo Soulに特に関心があります。
          そのため、これらのジャンルのギターを練習しています。
          また、エンジニアとしてはフロントエンドにもバックエンドにも興味がありますが、
          どちらかというとバックエンドへの関心が大きいです。
        </Text>
      </Box>
    </Box>
  )
}

export default About