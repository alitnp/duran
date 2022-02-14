import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import endpointUrls from "utils/constants/endpointUrls";
import routes from "utils/constants/routes";

const FeaturesRow = () => {
  const { featured } = useSelector((state) => state.home);

  if (!featured) return null;

  return (
    <div className="grid w-full grid-cols-1 gap-2 mb-6 sm:grid-cols-2 lg:grid-cols-4 mt-14">
      {featured.map((item, index) => {
        if (index > 3) return null;
        return (
          <Link
            href={routes.product.path + "?id=" + item.Id}
            key={item.Id}
            passHref
          >
            <a className="relative w-full h-32 overflow-hidden rounded-lg">
              <Image
                src={
                  endpointUrls.baseUrl + item.FeaturePicturesModel[0].ImageUrl
                }
                layout="fill"
                objectFit="cover"
              />
              <div
                className="absolute flex flex-col items-start justify-end w-full h-full p-4 pb-2"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0,0,0) 0%, rgba(0,0,0,0) 30%)",
                }}
              >
                <p className="mb-0 text-d-bg-color">{item.NameFa}</p>
                <p className="mb-0 text-d-bg-color">{item.NameEn}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default FeaturesRow;
