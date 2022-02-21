import ShowInfo from "components/Global/ShowInfo/ShowInfo";
import Button from "components/UI/Button/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

const PaymentMethod = ({
  changeStep,
  paymentMethods,
  shippingAddress,
  shippingMethod,
}) => {
  //states
  const { userDetail } = useSelector((state) => state.user);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);

  //effects
  useEffect(() => {
    paymentMethods.map(
      (item) => item.Selected && setSelectedPaymentMethod(item)
    );
  }, []);

  //functions
  const getAddress = () => {
    if (!shippingAddress) return "";
    return (
      shippingAddress.StateProvinceName +
      " - " +
      shippingAddress.City +
      " - " +
      shippingAddress.Address1
    );
  };
  const handleFinish = async () => {
    setLoading(true);
    const result = await apiServices.post(endpointUrls.savePaymentMethod, {
      PaymentMethod: selectedPaymentMethod.PaymentMethodSystemName,
      UseLoyaltyPoints: false,
    });
    console.log(result);
    if (result.isSuccess) {
      const confirmResult = await apiServices.post(endpointUrls.confirmOrder);
      setLoading(false);
      console.log(confirmResult);
      if (confirmResult.isSuccess && !confirmResult.data.Data) {
        changeStep("checkoutSucceed");
      }
    }
    setLoading(false);
  };

  return (
    <div className="">
      <div className="pb-4 mb-4 border-b">
        <p className="mb-2 font-medium">اطلاعات :</p>
        <ShowInfo right="نام" left={userDetail.FirstName} />
        <ShowInfo right="نام خانوادگی" left={userDetail.LastName} />
        <ShowInfo right="آدرس" left={getAddress()} />
        <ShowInfo
          right="طریقه ارسال"
          left={shippingMethod.Name + " - هزینه : " + shippingMethod.Fee}
        />
      </div>
      <div>
        <p className="mb-2 font-medium">روش پرداخت :</p>
        <div className="flex flex-col pb-4 mb-4 border-b gap-y-2">
          {paymentMethods.map((item) => {
            return (
              <div
                key={item.Name}
                className={`flex items-center p-2 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                  selectedPaymentMethod?.Name === item.Name &&
                  "border-d-border-gray shadow-md"
                }`}
                onClick={() => setSelectedPaymentMethod(item)}
              >
                {selectedPaymentMethod?.Name !== item.Name && (
                  <div className="pl-4 pr-2">
                    <div className="w-3 h-3 border rounded-full border-d-text" />
                  </div>
                )}
                {selectedPaymentMethod?.Name === item.Name && (
                  <div className="pl-4 pr-2">
                    <div className="w-3 h-3 border border-none rounded-full border-d-text bg-d-primary" />
                  </div>
                )}
                <div className="flex flex-col ">
                  <div className="flex items-center gap-x-2">
                    {item.LogoUrl && (
                      <Image
                        src={endpointUrls.baseUrl + item.LogoUrl}
                        width="56px"
                        height="56px"
                        objectFit="contain"
                      />
                    )}
                    <p className="mb-0 ml-2 font-medium whitespace-nowrap">
                      {item.Name}
                    </p>
                  </div>
                  <p className="mb-0 text-xs text-d-faded-text">
                    {item.Description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row-reverse">
          <Button
            text="تایید روش پرداخت"
            onClick={handleFinish}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
