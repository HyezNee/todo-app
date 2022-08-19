import { supabase } from '../utils/supabaseClient';
import { User } from '@supabase/supabase-js';

export const addTodo = async (content: string, userId: string) => {
  await supabase.from('todo').insert([
    {
      content,
      checked: false,
      user: userId,
    },
  ]);
};

export const getTodos = async (userId: string) => {
  const data = await supabase
    .from('todo')
    .select()
    .match({
      user: userId,
    })
    .order('id');
  return data;
};

export const updateTodos = async (content: string, checked: boolean, id: number) => {
  await supabase
    .from('todo')
    .update([
      {
        content,
        checked,
      },
    ])
    .match({ id });
};

export const deleteTodo = async (id: number) => {
  await supabase.from('todo').delete().match({ id });
};