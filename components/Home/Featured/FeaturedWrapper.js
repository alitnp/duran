import Featured from "components/Home/Featured/Featured";
import { useSelector } from "react-redux";
import endpointUrls from "utils/constants/endpointUrls";

const FeaturedWrapper = () => {
  //states
  const { featured } = useSelector((state) => state.home);

  //functions
  const getFeaturedPicture = (product) => {
    if (product.DefaultPictureModel.IsFeaturePicture)
      return product.DefaultPictureModel.ImageUrl;
    if (product.SecondPictureModel.IsFeaturePicture)
      return product.SecondPictureModel.ImageUrl;
    return product.SecondPictureModel.ImageUrl;
  };

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {featured &&
        featured?.map((item) => {
          return (
            <Featured
              image={
                endpointUrls.baseUrl + item.FeaturePicturesModel[0].ImageUrl
              }
              key={item.Id}
              english={item.NameEn}
              persian={item.NameFa}
              id={item.Id}
            />
          );
        })}
    </div>
  );
};

export default FeaturedWrapper;
