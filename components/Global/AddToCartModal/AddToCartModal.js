import { Modal } from "antd";
import Button from "components/UI/Button/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToShoppngCart } from "redux/middlewares/user/addToShoppingCart";
import {
  addItemToCart,
  setCartNeedAnimation,
  setCartTempAddToCart,
} from "redux/reducers/cartReducer/cartReducer";
import endpointUrls from "utils/constants/endpointUrls";

const AddToCartModal = () => {
  //states
  const { tempAddToCart } = useSelector((state) => state.cart);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();

  //hooks
  const dispatch = useDispatch();

  //fuctions
  const handleClose = () => dispatch(setCartTempAddToCart(null));
  const getAttributes = (attribureName) =>
    tempAddToCart.info.ProductAttributeModels.find(
      (item) => item.Name === attribureName
    );
  const showAnimation = () => {
    handleClose();
    dispatch(
      setCartNeedAnimation({
        ...tempAddToCart.event,
        id: tempAddToCart.info.Id,
      })
    );
  };
  const handleAddToCart = () => {
    console.log(selectedColor);
    console.log(selectedSize);
    dispatch(
      addToShoppngCart(
        {
          ProductId: tempAddToCart.info.Id,
          ShoppingCartType: "ShoppingCart",
          Quantity: 1,
          Attributes: {
            ["product_attribute_" + getAttributes("Color").Id]:
              selectedColor.Id,
            ["product_attribute_" + getAttributes("Size").Id]: selectedSize.Id,
          },
        },
        showAnimation
      )
    );

    // dispatch(
    //   addItemToCart({
    //     ...tempAddToCart.info,
    //     selectedSize,
    //     selectedColor,
    //     quantity: 1,
    //   })
    // );
    // handleClose();
  };

  //effects
  useEffect(() => {
    if (tempAddToCart) {
      getAttributes("Size") && setSelectedSize(getAttributes("Size").Values[0]);
      getAttributes("Color") &&
        setSelectedColor(getAttributes("Color").Values[0]);
    }
  }, [tempAddToCart]);

  if (!tempAddToCart) return null;

  return (
    <Modal
      title={tempAddToCart.info.NameFa}
      visible={tempAddToCart}
      onOk={() => {}}
      onCancel={handleClose}
      footer={false}
    >
      <div className="flex flex-col items-center xs:flex-row gap-y-2 gap-x-2">
        <div className="relative h-full w-52 border-d-border-gray shrink-0">
          <img
            src={
              selectedColor?.PictureModel?.FullSizeImageUrl
                ? endpointUrls.baseUrl +
                  selectedColor.PictureModel.FullSizeImageUrl
                : endpointUrls.baseUrl +
                  tempAddToCart.info.DefaultPictureModel.ImageUrl
            }
            className="object-contain object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center w-full ">
          <div className=" w-52">
            {getAttributes("Size") && (
              <div className="flex flex-col items-center mb-4 xs:items-start">
                <p className="mb-3 text-sm">سایز:</p>
                <div className="flex gap-x-2 gap-y-2">
                  {getAttributes("Size").Values.map((item) => {
                    return (
                      <div
                        key={item.Id}
                        className={`border hover:bg-gray-100 w-8 h-8 flex flex-wrap items-center justify-center cursor-pointer ${
                          selectedSize?.Id === item.Id
                            ? " border-d-text"
                            : "text-gray-400 border-gray-400"
                        }`}
                        onClick={() => setSelectedSize(item)}
                      >
                        {item.Name}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {getAttributes("Color") && (
              <div className="flex flex-col items-center xs:items-start">
                <p className="mt-2 mb-3 text-sm">رنگ:</p>
                <div className="flex gap-x-2 gap-y-2">
                  {getAttributes("Color").Values.map((item) => {
                    return (
                      <div
                        key={item.Id}
                        className={`border hover:bg-gray-100 px-2 py-1 flex flex-wrap items-center justify-center cursor-pointer ${
                          selectedColor?.Id === item.Id
                            ? " border-d-text"
                            : "text-gray-400 border-gray-400"
                        }`}
                        onClick={() => setSelectedColor(item)}
                      >
                        {item.Name}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <Button
              text={
                <span className="flex items-center gap-x-2">
                  <FiShoppingCart /> افزودن به سبد خرید
                </span>
              }
              primary
              className="w-full mt-6"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
