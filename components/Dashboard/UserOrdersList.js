import Empty from "components/UI/Empty/Empty";
import { useEffect } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserOrdersList } from "redux/middlewares/user/getUserOrdersList";
import ShowInfo from "components/Global/ShowInfo/ShowInfo";

const UserOrdersList = () => {
  //states
  const { ordersList } = useSelector((state) => state.user);
  console.log(ordersList);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    dispatch(getUserOrdersList());
  }, []);

  if (!ordersList || ordersList?.Orders?.length === 0)
    return <Empty title="خریدی انجام نشده" />;

  return (
    <div className="">
      {ordersList.Orders.map((item) => {
        return (
          <div
            key={item.Id}
            className="grid grid-cols-1 gap-4 p-2 mb-4 border rounded-md shadow-md border-d-border-gray sm:grid-cols-2 lg:grid-cols-3"
          >
            <ShowInfo
              right="زمان خرید"
              left={new DateObject({
                date: item.CeatedOn,
                calendar: persian,
                locale: persian_fa,
              }).format("YYYY/MM/DD dddd HH:mm")}
            />
            <ShowInfo right="کد خرید" left={item.OrderCode} />
            <ShowInfo right="مبلغ پرداختی" left={item.OrderTotal} />
            <ShowInfo right="وضعیت سفارش" left={item.OrderStatus} />
            <ShowInfo right="وضعیت پرداخت" left={item.PaymentStatus} />
            <ShowInfo right="وضعیت ارسال" left={item.ShippingStatus} />
          </div>
        );
      })}
    </div>
  );
};

export default UserOrdersList;
