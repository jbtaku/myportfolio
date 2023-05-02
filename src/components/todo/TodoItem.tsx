import { useRecoilState } from 'recoil';
import { Button, HStack, Text, useDisclosure } from '@chakra-ui/react';
import TermSetter from './TermSetter';
import { ChangeEvent} from 'react';
import DeleteItem from './DeleteItem';
import { todo } from '@/src/store/atom';
import { Todo } from '@/types/type';

type Props = {
    item: Todo
}

const TodoItem = ({ item }: Props) => {
    const [todoList, setTodoList] = useRecoilState(todo);
    const index = todoList.findIndex((target) => target.id === item.id);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTodoList(prevState => prevState.map((obj, i) => {
            return i === index ? {...obj, state: e.target.value} : obj
        }))
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <HStack>
            <Text as={"span"} mx={[0, 1]}>{item.title}</Text>
            <select value={item.state} onChange={handleChange}>
                <option value='not_started'>未着手</option>
                <option value='start'>着手</option>
                <option value='complete'>完了</option>
            </select>
            <Text>{item.term}</Text>
            <Button onClick={onOpen}>編集</Button>
            <TermSetter index={index} isOpen={isOpen} onClose={onClose} isEdit={true} id={item.id} />
            <DeleteItem id={item.id} index={index} todoList={todoList} setTodoList={setTodoList} />
        </HStack>
    )

    return <></>
}

export default TodoItem;
