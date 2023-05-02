import { ChangeEvent, useId, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Input, Button, Box, useDisclosure } from '@chakra-ui/react';
import TermSetter from './TermSetter';
import { todo } from '@/src/store/atom';

const ItemCreator = () => {
  const [title, setTitle] = useState("");
  const [term, setTerm] = useState("");
  const [todoList, setTodoList] = useRecoilState(todo);
  const createId = (): string => {
    const tmpId: string = new Date().getTime().toString(16);
    return tmpId
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList([
      ...todoList,
      {
        id: createId(),
        title: title,
        state: 'not_started',
        term: term
      },
    ]);
    setTitle("");
    setTerm("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box m={[0, "2%", "1%"]}>
      <Input h={8} w={52} border={"2px"} placeholder={"Title"} type="text" value={title} onChange={handleChange} />
      <Button onClick={onOpen}>期間を指定</Button>
      <TermSetter index={todoList.length - 1} isOpen={isOpen} onClose={onClose} isEdit={false} setTerm={setTerm} id={""} />
      <Button colorScheme="blue" onClick={addItem}>追加</Button>
    </Box>
  );
}

export default ItemCreator;
