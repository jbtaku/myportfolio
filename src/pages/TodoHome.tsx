import { Box, HStack } from "@chakra-ui/react"
import DisplaySelector from "../components/todo/DisplaySelector"
import DeleteItems from "../components/todo/DeleteItems"
import ItemCreator from "../components/todo/ItemCreator"
import TodoList from "../components/todo/TodoList"

function Home() {
    return (
        <Box py={4}>
            <HStack>
                <DisplaySelector />
                <DeleteItems />
            </HStack>
            <ItemCreator />
            <TodoList />
        </Box>
    )
}

export default Home