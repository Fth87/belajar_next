import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>hello world</div>
    </div>
  );
}
