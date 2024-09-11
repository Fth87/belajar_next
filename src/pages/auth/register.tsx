import Link from "next/link";
const RegisterPage = () => {
  return (
    <div>
      <h1>register page</h1>
      Sudah punya akun? <Link href={"/auth/login"}>Login</Link>
    </div>
  );
};

export default RegisterPage;
