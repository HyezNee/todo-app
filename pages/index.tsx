import type { NextPage } from 'next'
import TodoList from '../components/todo/TodoList'
import styles from '../styles/Home.module.css'
import userState from '../store/user'
import { Session, User } from '@supabase/supabase-js'
import sessionState from '../store/session'
import { useEffect } from 'react'
import { getSession, getUser } from '../api/auth'
import { supabase } from '../utils/supabaseClient'
import { useRecoilState } from 'recoil'
import { SignInButton, SignOutButton } from '../components/common/AutoButton'

const Home: NextPage = () => {
  const [user, setUser] = useRecoilState<User | null>(userState);
  const [session, setSession] = useRecoilState<Session | null>(sessionState);

  //user data
  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, [session]);

  //session
  useEffect(() => {
    const data = getSession();
    setSession(data);

    //auth state가 바뀌면
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);


  return (
    <>
    <div style={{display: "flex", width: "100vw", justifyContent: "end", padding: "1vw"}}>
      {user !== null ? <SignOutButton /> : <SignInButton />}
    </div>
    {user !== null ? <TodoList /> : <></>}
    </>
   
  )
}

export default Home
