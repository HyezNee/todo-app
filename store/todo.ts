import { atom } from "recoil";
import { ITodo } from "../types/todo";

const todoListState = atom<ITodo[]>({
    key: 'todoListState',
    default: [],
});

export default todoListState;