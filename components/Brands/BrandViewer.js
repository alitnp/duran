import ProductsRow from 'components/Global/ProductsRow/ProductsRow';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBrandProduct } from 'redux/middlewares/brands/getBrandProduct';
import routes from 'utils/constants/routes';

const BrandViewer = ({ index, brand }) => {
  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    brand.Products.length === 0 && dispatch(getBrandProduct(index, brand.Id));
  }, []);

  return (
    <div className=''>
      <ProductsRow
        list={brand.Products}
        name={brand.NameFa}
        allLink={routes.result.path + '?bid=' + brand.Id}
      />
    </div>
  );
};

export default BrandViewer;
