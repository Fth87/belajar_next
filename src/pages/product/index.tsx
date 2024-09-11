import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ProductPage = () => {
  // Kalau misalkan belum login
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h1>Product page</h1>
      </div>
    </>
  );
};

export default ProductPage;
