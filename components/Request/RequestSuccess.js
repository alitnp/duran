import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import routes from "utils/constants/routes";

const RequestSuccess = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center w-10/12 max-w-2xl p-4 border rounded-md shadow-md bg-d-bg-color border-d-border-gray">
        <p className="mb-2 text-center text-7xl text-emerald-600">
          <BsFillCheckCircleFill />
        </p>
        <p className="text-center text-emerald-600">سفارش با موفقیت ثبت شد.</p>
        <p className="text-center ">
          سفارش شما در اسرع وقت بررسی و برآورد هزینه می شود.
        </p>
        <p className="pb-2 mb-4 text-center border-b">
          شما می توانید از طریق داشبورد در قسمت «سفارش های من» از وضعیت سفارش
          خود مطلع شوید.
        </p>
        <Link href={routes.dashboardRequests.path} passHref>
          <a className="mb-2 text-base cursor-pointer">
            <p className="flex items-center hover:text-d-primary gap-x-2">
              <RiShoppingBag2Fill />
              پیگیری سفارش
            </p>
          </a>
        </Link>
        <Link href={routes.home.path} passHref>
          <a className="text-base cursor-pointer">
            <p className="flex items-center hover:text-d-primary gap-x-2">
              <AiOutlineHome />
              بازگشت به خانه
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RequestSuccess;
