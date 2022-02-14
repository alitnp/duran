import Link from "next/link";
import routes from "utils/constants/routes";
import { Separator } from "utils/helpers/persianTools";

const ProductCardInfo = ({ info }) => {
  //functions
  const getAttributes = (attribureName) =>
    info.ProductAttributeModels.find((item) => item.Name === attribureName);

  return (
    <div className="p-1 pb-2">
      <Link href={`${routes.product.path}?id=${info?.Id}`} passHref>
        <a className="cursor-pointer group">
          <p className="mt-1 mb-0 overflow-hidden font-bold text-center text-ellipsis group-hover:underline">
            {info?.NameFa}
          </p>
          <p className="mb-0 overflow-hidden font-bold text-center text-ellipsis group-hover:underline">
            {info?.NameEn}
          </p>
        </a>
      </Link>
      {getAttributes("Size") && (
        <div className="flex flex-wrap justify-center text-xs gap-x-1">
          {getAttributes("Size").Values.map((item, index) => (
            <p className="mb-0" key={index}>
              {index !== 0 && <span className="ml-1">-</span>}
              <span>{item.Name}</span>
            </p>
          ))}
        </div>
      )}
      {getAttributes("Color") && (
        <div className="flex flex-wrap justify-center text-xs gap-x-1 gap-y-0">
          {getAttributes("Color").Values.map((item, index) => (
            <p className="mb-0" key={index}>
              {index !== 0 && <span className="ml-1">-</span>}
              <span>{item.Name}</span>
            </p>
          ))}
        </div>
      )}
      <p className="mt-2 mb-0 font-medium text-center">
        {Separator(info?.ProductPrice?.PriceValue * 10000) + " تومان"}
      </p>
    </div>
  );
};

export default ProductCardInfo;
