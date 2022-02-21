import BasicInfo from "components/Checkout/BasicInfo";
import PaymentMethod from "components/Checkout/PaymentMethod";
import ShippingMethod from "components/Checkout/ShippingMethod";
import Succeed from "components/Checkout/Succeed";
import Layout from "components/Layout/Layout";
import Image from "next/image";
import { useState } from "react";

const CheckoutPage = () => {
  //states
  const [checkoutStep, setCheckoutStep] = useState("checkoutSucceed");
  const [shippingAddress, setShippingAddress] = useState(null);
  const [shippingMethods, setShippingMethods] = useState(null);
  const [shippingMethod, setShippingMethod] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      PaymentMethodSystemName: "Payments.PayPalStandard",
      Name: "PayPal Standard",
      Description:
        "You will be redirected to PayPal site to complete the payment",
      Fee: null,
      Selected: true,
      LogoUrl: "/Plugins/Payments.PayPalStandard/logo.jpg",
      UserFields: [],
    },
    {
      PaymentMethodSystemName: "Payments.CashOnDelivery",
      Name: "Cash on delivery",
      Description: "Cash On Delivery",
      Fee: null,
      Selected: false,
      LogoUrl: "/Plugins/Payments.CashOnDelivery/logo.jpg",
      UserFields: [],
    },
    {
      PaymentMethodSystemName: "Payments.BrainTree",
      Name: "BrainTree payment",
      Description: "Pay by credit / debit card",
      Fee: null,
      Selected: false,
      LogoUrl: "/Plugins/Payments.BrainTree/logo.jpg",
      UserFields: [],
    },
  ]);

  //functions

  return (
    <Layout>
      <div className="flex w-full lg:w-10/12 min-h-[250px] mx-auto mt-14 mb-44 border rounded-md shadow-lg border-d-border-gray overflow-hidden">
        <div className="w-full p-4 sm:w-1/2">
          {checkoutStep !== "checkoutSucceed" && (
            <h2 className="pb-4 text-lg font-bold text-center border-b border-d-border-gray">
              پرداخت
            </h2>
          )}
          {checkoutStep === "basicInfo" && (
            <BasicInfo
              changeStep={setCheckoutStep}
              setShippingMethods={setShippingMethods}
              setShippingAddress={setShippingAddress}
            />
          )}
          {checkoutStep === "shipping_method" && (
            <ShippingMethod
              changeStep={setCheckoutStep}
              shippingAddress={shippingAddress}
              shippingMethods={shippingMethods}
              setPaymentMethods={setPaymentMethods}
              setShippingMethod={setShippingMethod}
            />
          )}
          {checkoutStep === "payment_method" && (
            <PaymentMethod
              changeStep={setCheckoutStep}
              paymentMethods={paymentMethods}
              shippingAddress={shippingAddress}
              shippingMethod={shippingMethod}
            />
          )}
          {checkoutStep === "checkoutSucceed" && <Succeed />}
        </div>
        <div className="relative hidden   sm:block w-1/2 bg-[#efefef]">
          <Image src="/image/checkout.png" layout="fill" objectFit="contain" />
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
