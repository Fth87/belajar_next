import Link from "next/link";
import { useRouter } from "next/router";
const LoginPage = () => {
const {push} = useRouter();

const handlerLogin = ()=>{
    push("/product")
}
  return (
    <div>
      <h1>Login page</h1>
      {/* Cara kedua menggunakan useRouter() dan event handler */}
      <button onClick={()=>handlerLogin()}>product</button>
      {/* Cara pertama menggunakan Link() */}
      Belum punya akun? <Link href={"register"}>Registrasi</Link>
    </div>
  );
};

export default LoginPage;
