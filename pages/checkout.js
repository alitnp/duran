import Layout from "components/Layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import endpointUrls from "utils/constants/endpointUrls";
import routes from "utils/constants/routes";
import apiServices from "utils/services/apiServices";

const CheckoutPage = () => {
  //states
  const { cartList } = useSelector((state) => state.user);
  const [checkoutStartInfo, setCheckoutStartInfo] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  console.log(checkoutStartInfo);
  //hooks
  const router = useRouter();

  //effects
  useEffect(() => {
    if (!cartList || cartList?.Items?.length === 0)
      router.push(routes.home.path);
    else handleStart();
  }, []);

  //functions
  const handleStart = async () => {
    const result = await apiServices.get(endpointUrls.checkoutStart);
    if (result.isSuccess) setCheckoutStartInfo(result.data.Data);
  };

  return (
    <Layout>
      <div className="flex w-10/12 min-h-[250px] mx-auto my-4 border rounded-md shadow-lg border-d-border-gray">
        <div className="w-full p-4">
          <h2 className="text-lg font-bold text-center">پرداخت</h2>
          {/* <span>لیست محصولات :</span> */}
          {/* <div className="flex flex-col gap-y-2 overflow-y-auto max-h-[150px] border mb-6">
            {cartList.Items.map((item) => {
              return (
                <div
                  key={item.Id}
                  className="flex items-center justify-between "
                >
                  <div className=" w-14 h-14">
                    <Image
                      src={endpointUrls.baseUrl + item.Picture.ImageUrl}
                      width="56px"
                      height="56px"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mr-2 h-fit">
                    <p className="mb-0">{item.ProductName}</p>
                    <p className="mb-0 text-xs text-d-faded-text">
                      {item.AttributeInfo}
                    </p>
                  </div>
                  <p>{item.Quantity}</p>
                  <p>{item.SubTotal}</p>
                </div>
              );
            })}
          </div> */}
          <div>
            <p className="mb-2">انتخاب آدرس :</p>
            <div className="mb-2">
              {checkoutStartInfo &&
                checkoutStartInfo.ShippingAddress.ExistingAddresses.map(
                  (item) => {
                    return (
                      <div
                        key={item.Id}
                        className={`flex items-center p-2 border rounded-lg cursor-pointer hover:bg-d-gray ${
                          selectedAddress?.Id === item.Id &&
                          "border-d-border-gray shadow-md"
                        }`}
                        onClick={() => setSelectedAddress(item)}
                      >
                        {selectedAddress?.Id !== item.Id && (
                          <div className="pl-4 pr-2">
                            <div className="w-3 h-3 border rounded-full border-d-text" />
                          </div>
                        )}
                        {selectedAddress?.Id === item.Id && (
                          <div className="pl-4 pr-2">
                            <div className="w-3 h-3 border border-none rounded-full border-d-text bg-d-primary" />
                          </div>
                        )}
                        <div className="flex">
                          <p className="mb-0 ml-2">
                            {item.StateProvinceName + " - " + item.City}
                          </p>
                          <p className="mb-0">{item.Address1}</p>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
            <p className="cursor-pointer text-d-primary">+ افزودن آدرس جدید</p>
          </div>
        </div>
        <div className="relative hidden sm:block w-full bg-[#efefef]">
          <Image src="/image/checkout.png" layout="fill" objectFit="contain" />
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
