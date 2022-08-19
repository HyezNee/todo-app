import { atom } from 'recoil';
import { Session } from '@supabase/supabase-js';

const sessionState = atom<Session | null>({
  key: 'sessionState',
  default: null,
});

export default sessionState;