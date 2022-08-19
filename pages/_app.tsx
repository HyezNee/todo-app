import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyHeader from '../components/common/MyHeader';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MyHeader />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp
