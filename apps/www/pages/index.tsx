import { InferGetStaticPropsType } from 'next';
import React from 'react';

import { Hero } from '../components/klient/modules/hero/Hero';
import { ProductCollection } from '../components/klient/modules/productCollection/ProductCollection';
import { Layout } from '../components/klient/shared/layout/Layout';
import { Product } from '../types/product';
// import { getProducts } from '../utils/api/getProducts';

function HomePage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Sklep strona główna">
      <Hero />
      <ProductCollection products={products} />
    </Layout>
  );
}
export const getStaticProps = async () => {
  // const res = getProducts();

  // todo: change with api call result
  const products: Product[] = [
    {
      id: 123,
      name: 'Product Name',
      description: 'desc',
      slug: '123',
      isPublic: true,
      regularPrice: 1234,
      productType: 'footwear',
    },
    {
      id: 345,
      name: 'To jest dłuższa prawdziwa nazwa',
      description: 'desc',
      slug: '345',
      isPublic: true,
      regularPrice: 3454,
      discountPrice: 12,
      productType: 'footwear',
    },
    {
      id: 346,
      name: 'Beautiful socks',
      description: 'desc',
      slug: '346',
      isPublic: true,
      regularPrice: 3454,
      discountPrice: 1234.2,
      productType: 'footwear',
    },
    {
      id: 347,
      name: 'Beautiful socks 2',
      description: 'desc',
      slug: '347',
      isPublic: true,
      regularPrice: 3454,
      discountPrice: 12,
      productType: 'footwear',
    },
  ];

  return {
    props: {
      products,
    },
    revalidate: 1, // In seconds
  };
};

export default HomePage;
