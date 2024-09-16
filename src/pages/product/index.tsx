import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  // Kalau misalkan belum login
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isLogin) {
      push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch('api/products')
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Product page</h1>
        {products.map((product: productType) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
