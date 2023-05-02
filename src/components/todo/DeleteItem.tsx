import { Button } from '@chakra-ui/react';
import { Todo } from '@/types/type';


type Props = {
    id: string
    index: number
    todoList: Todo[]
    setTodoList: (todoList: Todo[]) => void
}

function DeleteItem(props: Props) {

    const deleteItem = () => {
        const newTodoList = [
            ...props.todoList.slice(0, props.index),
            ...props.todoList.slice(props.index + 1),
        ];
        props.setTodoList(newTodoList);
    }
    return (
        <Button colorScheme="blue" onClick={deleteItem}>削除</Button>
    )
}

export default DeleteItem