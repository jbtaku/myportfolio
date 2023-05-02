import FullCalendar from "@fullcalendar/react";
import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import interaction from "@fullcalendar/interaction";
import daygrid from "@fullcalendar/daygrid";
import { useRecoilState } from "recoil";
import useChangeItem from "./changeItem";
import { Todo } from "@/types/type";
import { ChangeEvent, useState } from "react";
import { todo } from "@/src/store/atom";

type Props = {
  index: number
  isOpen: boolean
  onClose: () => void
  isEdit: boolean
  setTerm?: (term: string) => void
  id: string
}

function TermSetter(props: Props) {
  const [todoList, setTodoList] = useRecoilState(todo);
  const item = todoList[props.index];
  const setChangeItem = useChangeItem()
  let newTodoList: Todo[] = todoList;

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={Boolean} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          {props.isEdit ? <ModalHeader>編集</ModalHeader> : <ModalHeader>作成</ModalHeader>}
          <ModalBody>
            {props.isEdit ?
              <>
                <FormLabel > 変更後のタイトル</FormLabel>
                <Input value={item.title} onChange={(e: ChangeEvent<HTMLInputElement>) => { setTodoList(setChangeItem({ key: "title", index: props.index, value: e.target.value, id: props.id })) }} />
              </> : <></>
            }
            <FullCalendar
              plugins={[interaction, daygrid]}
              initialView="dayGridMonth"
              selectable={true}
              locale="ja"
              dateClick={function (info) {
                props.isEdit ? newTodoList = setChangeItem({ key: "term", index: props.index, value: info.dateStr, id:props.id }) :
                  props.setTerm?.(info.dateStr)
              }}
            />
          </ModalBody>
          <Button onClick={() => { props.onClose(), setTodoList(newTodoList) }}>{props.isEdit ? "変更" : "閉じる"}</Button>
        </ModalContent>
      </Modal>
    </>)
};

export default TermSetter;