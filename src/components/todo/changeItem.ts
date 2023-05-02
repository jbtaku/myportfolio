import { todo } from '@/src/store/atom';
import { Todo } from '@/types/type';
import { useRecoilState } from 'recoil';

type Props = {
    key: string
    index: number
    value: string
    id: string
}

function useChangeItem() {
    const [todoList, setTodoList] = useRecoilState(todo);
    const setChngeItem = (props: Props): Todo[] => {
        const newItem = { ...todoList[props.index], [props.key]: props.value }

        return [...todoList.slice(0, props.index),
            newItem,
        ...todoList.slice(props.index + 1)]
    }
    return setChngeItem;
}

export default useChangeItem
