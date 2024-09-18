import ProductView from '@/views/product/Index';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/fetcher';
const ProductPage = () => {
  // Kalau misalkan belum login
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isLogin) {
      push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, error, isLoading } = useSWR('/api/products', fetcher);
  console.log(data);

  // useEffect(() => {
  //   fetch('api/products')
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  );
};

export default ProductPage;
