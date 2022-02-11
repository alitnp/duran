import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import PageTitle from 'components/Home/PageTitle/PageTitle';
import CategoryBar from 'components/Home/CategoryBar/CategoryBar';
import FeaturedWrapper from 'components/Home/Featured/FeaturedWrapper';
import ProductLinkWrapper from 'components/Home/ProductLink/ProductLinkWrapper';
import BrandsWrapper from 'components/Home/BrandsWrapper/BrandsWrapper';
import ProductsRow from 'components/Global/ProductsRow/ProductsRow';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNewProducts } from 'redux/middlewares/home/getNewProducts';
import { getHomeBestSelleres } from 'redux/middlewares/home/getHomeBestSellers';
import { getHomeFeatured } from 'redux/middlewares/home/getHomeFeatured';

export default function Home() {
  //states
  const { newProducts, bestSellers, featured } = useSelector((state) => state.home);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !newProducts && dispatch(getNewProducts());
    !bestSellers && dispatch(getHomeBestSelleres());
    !featured && dispatch(getHomeFeatured());
  }, []);

  return (
    <>
      <Head>
        <title>Duran Shop</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Layout>
        <PageTitle className='mt-4 h-96' />
        <CategoryBar />
        <FeaturedWrapper />
        <ProductLinkWrapper />
        <BrandsWrapper />
        <ProductsRow name='جدیدترین' list={newProducts || []} />
        <ProductsRow name='پرفروش ها' list={bestSellers || []} />
        {/* <Slider /> */}
      </Layout>
    </>
  );
}
