import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

type ProductCardProps = {
    img: string,
    title: string,
    description: string,
    url: string,
};

const ProductCard = (props: ProductCardProps) => {

    return (
        <Box mx={"3%"} my={"1%"}>
            <Link href={props.url}>
                <Box w={"360px"} bg={"teal.100"}>
                    <Heading as={"h2"} textAlign={"center"} my={"10px"}>{props.title}</Heading>
                    <img src={props.img} style={{ height: "280px", width: "340px", margin: "auto" }} />
                    <Text fontSize={25} fontWeight={"semibold"}>{props.description}</Text>
                </Box>
            </Link>
        </Box>
    );
};

export default ProductCard;