import Link from 'next/link';
import { useRouter } from 'next/router';
import Style from './login.module.scss';

const LoginVews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push('/product');
  };
  return (
    <div className={`${Style.login} `}>
      <h1>Login page</h1>
      {/* Cara kedua menggunakan useRouter() dan event handler */}
      <button onClick={() => handleLogin()}>product</button>
      {/* Cara pertama menggunakan Link() */}
      <p style={{ color: 'blue' }} className="text-3xl">
        Belum punya akun? <Link href={'register'}>Registrasi</Link>
      </p>
    </div>
  );
};

export default LoginVews;
