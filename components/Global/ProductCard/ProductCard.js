import CardPicture from './CardPicture';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCartNeedAnimation } from 'redux/reducers/cartReducer/cartReducer';
import { useSelector } from 'react-redux';
import endpointUrls from 'utils/constants/endpointUrls';
import ProductCardInfo from 'components/Global/ProductCard/ProductCardInfo';
import ProductCardAnimation from 'components/Global/ProductCard/ProductCardAnimation';
import ProductCardHoverMenu from 'components/Global/ProductCard/ProductCardHoverMenu';

const ProductCardRow = ({ info, className }) => {
  //states
  const [showAnimation, setShowAnimation] = useState();
  const { needAnimation } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  //hooks
  const dispatch = useDispatch();

  //useeffect
  useEffect(() => {
    if (needAnimation && needAnimation.id === info.Id) {
      setShowAnimation({ x: needAnimation.clientX, y: needAnimation.clientY });
      setTimeout(() => {
        setShowAnimation(null);
        dispatch(setCartNeedAnimation(null));
      }, 1200);
    }
  }, [needAnimation]);

  return (
    <div
      className={`relative overflow-hidden group shrink-0  select-none ${className} `}
    >
      <ProductCardHoverMenu info={info} setLoading={setLoading} />
      <div className='border'>
        <CardPicture
          loading={loading}
          firstImage={
            info?.DefaultPictureModel.ImageUrl &&
            endpointUrls.baseUrl + info?.DefaultPictureModel.ImageUrl
          }
          alt={info?.DefaultPictureModel.AlternateText}
          secondImage={
            info?.SecondPictureModel.ImageUrl && !info.SecondPictureModel.IsFeaturePicture &&
            endpointUrls.baseUrl + info?.SecondPictureModel.ImageUrl
          }
        />
      </div>
      <ProductCardInfo info={info} />
      <ProductCardAnimation showAnimation={showAnimation} />
    </div>
  );
};

export default ProductCardRow;
