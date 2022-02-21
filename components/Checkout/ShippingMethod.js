import ShowInfo from "components/Global/ShowInfo/ShowInfo";
import Button from "components/UI/Button/Button";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

const ShippingMethod = ({
  changeStep,
  shippingAddress,
  shippingMethods,
  setPaymentMethods,
  setShippingMethod,
}) => {
  //states
  const { userDetail } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);

  //effects
  useEffect(() => {
    shippingMethods?.map(
      (item) => item.Selected && setSelectedShippingMethod(item)
    );
  }, [shippingMethods]);

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
    const result = await apiServices.post(endpointUrls.saveShippingMethod, {
      Name: selectedShippingMethod.Name,
      ShippingRateProviderSystemName:
        selectedShippingMethod.ShippingRateProviderSystemName,
    });
    setLoading(false);
    if (result.isSuccess) {
      console.log(result.data);
      setPaymentMethods(result.data.Data.Model.PaymentMethods);
      setShippingMethod(selectedShippingMethod);
      changeStep(result.data.Data.GotoSection);
    }
  };

  return (
    <div className="">
      <div className="pb-4 mb-4 border-b">
        <p className="mb-2 font-medium">اطلاعات :</p>
        <ShowInfo right="نام" left={userDetail.FirstName} />
        <ShowInfo right="نام خانوادگی" left={userDetail.LastName} />
        <ShowInfo right="آدرس" left={getAddress()} />
      </div>
      <div>
        <p className="mb-2 font-medium">روش ارسال :</p>
        <div className="flex flex-col pb-4 mb-4 border-b gap-y-2">
          {shippingMethods &&
            shippingMethods.map((item) => {
              return (
                <div
                  key={item.Name}
                  className={`flex items-center p-2 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedShippingMethod?.Name === item.Name &&
                    "border-d-border-gray shadow-md"
                  }`}
                  onClick={() => setSelectedShippingMethod(item)}
                >
                  {selectedShippingMethod?.Name !== item.Name && (
                    <div className="pl-4 pr-2">
                      <div className="w-3 h-3 border rounded-full border-d-text" />
                    </div>
                  )}
                  {selectedShippingMethod?.Name === item.Name && (
                    <div className="pl-4 pr-2">
                      <div className="w-3 h-3 border border-none rounded-full border-d-text bg-d-primary" />
                    </div>
                  )}
                  <div className="flex flex-col ">
                    <p className="mb-0 ml-2 font-medium whitespace-nowrap">
                      {item.Name}
                    </p>
                    <p className="mb-0 text-d-primary">
                      هزینه ارسال : {item.Fee}
                    </p>
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
            text="تایید روش ارسال"
            onClick={handleFinish}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
