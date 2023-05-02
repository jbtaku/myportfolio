import { Box, Button, Input, InputGroup, Text, Flex, VStack } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import handleImageUpload from "../../api";
import { answer } from "../store/atom";

function PredictHome() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useRecoilState(answer);

  return (
    <Box w={"100vw"} h={"100vh"} textAlign={"center"} bg={"green.300"}>
      <Text py={12} fontWeight={"bold"} fontSize={60}>顔画像をアップロードしてください</Text>
      <InputGroup>
        <Flex m={"auto"}>
          <Input size={"lg"} variant="unstyled" type={"file"} name={"file"} accept={"image/*"} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(selectedFile);
            }
          }}
          />
          <Button size={"lg"} type={"submit"} onClick={() => { if (file) { handleImageUpload(file, setData) } }}>推定する</Button>
        </Flex>
      </InputGroup>
      <VStack h={"50vh"} w={"100vw"} alignItems={"center"}>
        <Text pt={"20px"} fontSize={52} fontWeight={"bold"}>この顔は...</Text>
        <Text fontSize={52} fontWeight={"bold"}>{data.answer}</Text>
      </VStack>
    </Box>
  )
}

export default PredictHome
