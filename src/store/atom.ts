import { Answer, Filter, Todo } from "@/types/type";
import { atom } from "recoil";

export const todo = atom<Todo[]>({
    key: 'todo',
    default: [],
});

export const filter = atom<Filter>({
    key: "filter",
    default: {
        state: "all",
        term: "",
    }
})

export const answer = atom<Answer>({
    key: "answer",
    default: {answer: ""}
})