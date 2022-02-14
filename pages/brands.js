import BrandsList from "components/Brands/BrandsList";
import BrandViewer from "components/Brands/BrandViewer";
import Layout from "components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBrandsList } from "redux/middlewares/brands/getBrandsList";

const BrandsPage = () => {
  //states
  const { brandsList } = useSelector((state) => state.brands);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !brandsList && dispatch(getBrandsList());
  }, [brandsList]);

  return (
    <Layout>
      <div className="mt-4">
        <BrandsList />
        {brandsList?.map((item, index) => (
          <BrandViewer key={item.Id} index={index} brand={item} />
        ))}
      </div>
    </Layout>
  );
};

export default BrandsPage;
