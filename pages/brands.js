import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getBrandsList } from 'redux/middlewares/brands/getBrandsList';

const BrandsPage = () => {
  //states
  const { brandsList } = useSelector((state) => state.brands);
  console.log(brandsList);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !brandsList && dispatch(getBrandsList());
  }, [brandsList]);

  return <div className=''></div>;
};

export default BrandsPage;
