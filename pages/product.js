import Layout from "components/Layout/Layout";
import BuyBox from "components/Product/BuyBox";
import Specifications from "components/Product/Specifications";
import Comments from "components/Product/Comments";
import ProductImages from "components/Product/ProductImages";
import ProductsRow from "components/Global/ProductsRow/ProductsRow";
import useScreenWidth from "utils/hooks/useScreenWidth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductDetail } from "redux/middlewares/global/getProductDetail";
import LoadingCover from "components/UI/LoadingSpin/LoadingCover";
import ProductBreadCrumb from "components/Product/ProductBreadCrumb";
import SendComment from "pages/SendComment";
import FeaturesRow from "components/Results/FeaturedRow";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNeedRedirect } from "redux/reducers/homeReducer/homeReducer";
import routes from "utils/constants/routes";

const Product = () => {
  //states
  const { loggedIn } = useSelector((state) => state.user);
  const [productId, setProductId] = useState();
  const [productDetail, setProductDetail] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSendComment, setShowSendComment] = useState(false);

  //hookes
  const { query, push } = useRouter();
  const dispatch = useDispatch();

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

  const showCommentDialoge = () => {
    if (!loggedIn) {
      dispatch(setNeedRedirect(routes.product.path + "?id=" + productId));
      push(routes.login.path);
      return;
    }
    setShowSendComment(true);
  };

  return (
    <Layout>
      <ProductBreadCrumb list={productDetail?.Breadcrumb?.CategoryBreadcrumb} />

      <div className="flex flex-col-reverse items-stretch gap-4 mb-6 sm:flex-row">
        <BuyBox
          info={productDetail}
          id={productDetail?.Id}
          persianBrand={productDetail?.BrandModel?.NameFa}
          englishBrand={productDetail?.BrandModel?.NameEn}
          persianName={productDetail?.NameFa}
          englishName={productDetail?.NameEn}
          sizes={productDetail?.ProductAttributes?.find(
            (item) => item.Name === "Size"
          )}
          colors={productDetail?.ProductAttributes?.find(
            (item) => item.Name === "Color"
          )}
          price={productDetail?.ProductPrice?.PriceValue}
        />
        {productDetail?.PictureModels && (
          <ProductImages images={productDetail?.PictureModels} />
        )}
      </div>

      <Specifications
        desc={productDetail?.FullDescription}
        // category={info.category}
        // model={info.model}
        // color={info.color}
        // madeIn={info.madeIn}
        // material={info.material}
      />

      <ProductsRow
        list={productDetail?.RelatedProducts}
        key={2}
        name={"محصولات مشابه"}
        className="mt-10"
        small
      />

      <Comments
        overView={productDetail?.ProductReviewOverview}
        reviews={productDetail?.ProductReviews}
        showCommentDialoge={showCommentDialoge}
      />

      <SendComment
        show={showSendComment}
        close={() => setShowSendComment(false)}
        id={productDetail?.Id}
        getProduct={getProduct}
      />
      {loading && <LoadingCover />}
      <FeaturesRow />
    </Layout>
  );
};

export default Product;
