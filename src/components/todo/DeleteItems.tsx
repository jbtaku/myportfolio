import { filter, todo } from "@/src/store/atom";
import { Todo } from "@/types/type";
import { Button } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil"

function DeleteItems() {
    const [todoList, setTodoList] = useRecoilState(todo);
    const state = useRecoilValue(filter).state;
    let tmp: Todo[] = [];
    return (
        <Button onClick={() => {
            if (state !== "all") { todoList.forEach(item => item.state === state ? null : tmp.push(item)) }
            setTodoList(tmp)
        }}>まとめて削除</Button>
    )
}

export default DeleteItems