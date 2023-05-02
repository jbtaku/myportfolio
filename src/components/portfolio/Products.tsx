import { Box, Heading } from "@chakra-ui/react"
import ProductCard from "./ProductCard"


function Products() {

  return (
    <>
      <Box id={"Products"} m={"auto"} minH={"100vh"} h={"fit-content"} w={"90vw"} bg={"yellow.200"}>
        <Heading py={"2vh"} as={"h1"} size={"4xl"} textAlign={"center"}>Products</Heading>
        <Box justifyContent={"center"} display={"flex"} flexWrap={"wrap"}>
          <ProductCard img="/img/Todo.png" title="Todo" description="Reactを使用して作成した簡単なtodoリストです。todoの状態ごとに表示したり、まとめて削除することができます。" url="/TodoHome"/>
          <ProductCard img="/img/Predict.png" title="顔から楽器推定" description="顔画像からやってそうな楽器を推定するサイトです。pythonとReactで作成しました。
          WebフレームワークにはFastAPIを使用しています。" url="/PredictHome"/>          
        </Box>
      </Box>
    </>
  )
}

export default Products