import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import { useStateFilteredTodo } from '@/src/store/selector';
import { Todo } from '@/types/type';

const TodoList = () => {
  const todoList = useRecoilValue(useStateFilteredTodo);
  return (
    <>
      {todoList.map((item: Todo) => <TodoItem key={item.id} item={item} />)}
    </>
  );
}

export default TodoList;