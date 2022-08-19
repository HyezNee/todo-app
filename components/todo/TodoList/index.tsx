import { useRecoilState, useRecoilValue } from "recoil";
import todoListState from "../../../store/todo";
import styled from '@emotion/styled';
import CreateTodo from "../CreateTodo";
import TodoItem from "../TodoItem";
import { getUser } from "../../../api/auth";
import { useEffect } from "react";
import { getTodos } from "../../../api/todo";
import userState from "../../../store/user";
import Wrapper from "./style";

export default function TodoList() {
    const [todolist, setTodolist] = useRecoilState(todoListState);
    const user = useRecoilValue(userState);

    useEffect(() => {
        const func = async () => {
            const res = await getTodos(user!!.id);
            if (res.status === 200 && res.data !== null) {
                setTodolist(res.data);
            }
        };
        func();
    }, []);

    return (
        <Wrapper>
            <CreateTodo />
            {
                todolist.slice(0).reverse().map(item => (
                    <TodoItem item={item} key={item.id} />
                ))
            }
        </Wrapper>
    );
}