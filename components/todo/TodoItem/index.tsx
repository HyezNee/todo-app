import styled from '@emotion/styled';
import { Checkbox, Divider } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getTodos, updateTodos } from '../../../api/todo';
import todoListState from '../../../store/todo';
import userState from '../../../store/user';
import { ITodo } from '../../../types/todo';
import {Wrapper, SText, STextBlurred} from '../TodoItem/style';

interface IProps {
    item: ITodo;
}

export default function TodoItem({item} :IProps) {
    const [todolist, setTodolist] = useRecoilState<ITodo[]>(todoListState);
    const user = useRecoilValue(userState);

    const handleChange = async () => {
        const res = await updateTodos(item.content, !item.checked, item.id);
        const res2 = await getTodos(user!!.id);
        // console.log(res2.data);
        if (res2.status === 200 && res2.data !==null) {
            setTodolist(res2.data);
        }
    }

    return (
        <>
            <Wrapper>
                <Checkbox defaultChecked color="default"
                    checked={item.checked} onChange={handleChange}/>
                {!item.checked? <SText>{ item.content }</SText> : <STextBlurred>{ item.content }</STextBlurred>}
            </Wrapper>
            <Divider />
        </>
    );
}