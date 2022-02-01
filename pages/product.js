import Layout from 'components/Layout/Layout';
import BuyBox from 'components/Product/BuyBox';
import Specifications from 'components/Product/Specifications';
import Comments from 'components/Product/Comments';
import ProductImages from 'components/Product/ProductImages';
import ProductsRow from 'components/Global/ProductsRow/ProductsRow';
import useScreenWidth from 'utils/hooks/useScreenWidth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductDetail } from 'redux/middlewares/global/getProductDetail';
import LoadingSpin from 'components/UI/LoadingSpin/LoadingSpin';
import LoadingCover from 'components/UI/LoadingSpin/LoadingCover';
import ProductBreadCrumb from 'components/Product/ProductBreadCrumb';
import { Skeleton } from 'antd';
import SendComment from 'pages/SendComment';

const info = {
  productId: 1,
  persianName: 'آدیداس - ریسپانس سوپر',
  englishName: 'Adidas - Response Super',
  price: '1700000',
  sizes: ['40', '41', '42'],
  category: 'مردانه',
  model: 'باشگاهی - دویدن',
  color: 'مشکی - سفید',
  madeIn: 'ویتنام',
  material: '',
  desc: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
	طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
	سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
	کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
	زیادی در شصت و سه درصد گذشته حال و آینده`,
  comments: {
    items: [
      {
        sender: 'میثاق امیرفجر',
        message: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
      },
      {
        sender: 'یاسین حجازی',
        message: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
      },
    ],
    totalComments: 32,
    pageNumber: 1,
    pageSize: 2,
  },

  images: [
    '/image/shoes/product/1-1.jpg',
    '/image/shoes/product/1-2.jpg',
    '/image/shoes/product/1-3.jpg',
    '/image/shoes/product/1-4.jpg',
    '/image/shoes/product/1-5.jpg',
    '/image/shoes/product/1-6.jpg',
  ],
  similars: [
    {
      id: 2,
      firstImage: '/image/shoes/jordan-2.jpg',
      secondImage: '/image/shoes/jordan-1.webp',
      persianName: 'نایکی - جردن ۱ رترو',
      englishName: 'NIKE - Jordan 1 Retro',
      sizes: ['39', '40', '41', '42'],
      categories: 'مردانه',
      price: 2200000,
    },
    {
      id: 3,
      firstImage: '/image/shoes/shoe1-1.jpg',
      secondImage: '/image/shoes/shoe1-2.jpg',
      persianName: 'نایکی - جردن ۱ رترو',
      englishName: 'NIKE - Jordan 1 Retro',
      sizes: ['39', '40', '41', '42'],
      categories: 'مردانه',
      price: 2200000,
    },
    {
      id: 4,
      firstImage: '/image/shoes/shoe2-1.jpg',
      secondImage: '/image/shoes/shoe2-2.jpg',
      persianName: 'نایکی - جردن ۱ رترو',
      englishName: 'NIKE - Jordan 1 Retro',
      sizes: ['39', '40', '41', '42'],
      categories: 'مردانه',
      price: 2200000,
    },
  ],
};

const Product = () => {
  //states
  const [productId, setProductId] = useState();
  const [productDetail, setProductDetail] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSendComment, setShowSendComment] = useState(false);
  console.log(productDetail);

  //hookes
  const screenWidth = useScreenWidth();
  const { query } = useRouter();

  //effects
  useEffect(() => {
    if (query.id) setProductId(query.id);
    setTimeout(() => {
      !productId && setNotFound(true);
    }, 1000);
  }, [query]);
  useEffect(() => {
    !!productId && getProduct();
  }, [productId]);

  const getProduct = async () => {
    setProductDetail(
      await getProductDetail(productId, setLoading, setNotFound)
    );
  };

  return (
    <Layout>
      <ProductBreadCrumb list={productDetail?.Breadcrumb?.CategoryBreadcrumb} />

      <div className='flex flex-col mt-3 mb-6 lg:flex-row-reverse gap-x-10'>
        <div className='flex flex-col grow'>
          {productDetail?.PictureModels && (
            <ProductImages images={productDetail?.PictureModels} />
          )}
          {screenWidth >= 1024 && (
            <div className='hidden grid-cols-1 lg:grid'>
              <Specifications
                desc={productDetail?.FullDescription}
                category={info.category}
                model={info.model}
                color={info.color}
                madeIn={info.madeIn}
                material={info.material}
              />
              <Comments
                comments={info.comments.items}
                total={info.comments.totalComments}
                overView={productDetail?.ProductReviewOverview}
                sendComment={() => setShowSendComment(true)}
              />
              <ProductsRow key={2} name={'محصولات مشابه'} className='mt-10' />
            </div>
          )}
        </div>
        <div className='flex flex-col lg:min-w-[350px]'>
          <BuyBox
            persianBrand={productDetail?.BrandModel?.Name}
            englishBrand={productDetail?.BrandModel?.SeName}
            persianName={productDetail?.Name}
            englishName={productDetail?.SeName}
            sizes={productDetail?.ProductAttributes?.find(
              (item) => item.Name === 'Size'
            )}
            colors={productDetail?.ProductAttributes?.find(
              (item) => item.Name === 'Color'
            )}
            price={productDetail?.ProductPrice?.PriceValue}
          />
        </div>
        {screenWidth < 1024 && (
          <div className='grid grid-cols-1 lg:hidden'>
            <Specifications
              desc={productDetail?.FullDescription}
              category={info.category}
              model={info.model}
              color={info.color}
              madeIn={info.madeIn}
              material={info.material}
            />
            <Comments
              comments={info.comments.items}
              total={info.comments.totalComments}
              overView={productDetail?.ProductReviewOverview}
              sendComment={() => setShowSendComment(true)}
            />
            <ProductsRow key={1} name={'محصولات مشابه'} className='mt-10' />
          </div>
        )}
      </div>
      <SendComment
        show={showSendComment}
        close={() => setShowSendComment(false)}
        id={productDetail?.Id}
        getProduct={getProduct}
      />
      {loading && <LoadingCover />}
    </Layout>
  );
};

export default Product;
