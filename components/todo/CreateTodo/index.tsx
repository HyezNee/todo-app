import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddDiv from "./style";
import { ChangeEventHandler, useState } from "react";
import { addTodo, getTodos } from "../../../api/todo";
import { getUser } from "../../../api/auth";
import userState from "../../../store/user";
import todoListState from "../../../store/todo";
import { ITodo } from "../../../types/todo";

export default function CreateTodo() {
    const [todolist, setTodolist] = useRecoilState<ITodo[]>(todoListState);
    const user = useRecoilValue(userState);
    const [content, setContent] = useState('');

    const getText :ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const text: string = e.target.value;
        setContent(text);
    }

    const addContent = async () => {
        const res = await addTodo(content, user!!.id);    // Promiseresult undefined
        // setTodolist([...todolist, { id: todolist.length , content: content, checked: false, user: user!!.id}]);
        const res2 = await getTodos(user!!.id);
        // console.log(res2.data);
        if (res2.status === 200 && res2.data !==null) {
            setTodolist(res2.data);
        }
    }

    return (
        <AddDiv>
            <TextField id="standard-basic" label="Add Todo :)" variant="standard" onChange={getText} />
            <IconButton aria-label="add" style={{marginTop: 10}} onClick={addContent}><AddIcon /></IconButton>
        </AddDiv>
    );
}