import ProductsRow from 'components/Global/ProductsRow/ProductsRow';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBrandProduct } from 'redux/middlewares/brands/getBrandProduct';

const BrandViewer = ({ index, brand }) => {
  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    brand.Products.length === 0 && dispatch(getBrandProduct(index, brand.Id));
  }, []);

  return (
    <div className=''>
      <ProductsRow list={brand.Products} name={brand.NameFa} />
    </div>
  );
};

export default BrandViewer;
