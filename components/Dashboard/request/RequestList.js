import ShowInfo from "components/Global/ShowInfo/ShowInfo";
import Button from "components/UI/Button/Button";
import Empty from "components/UI/Empty/Empty";
import Link from "next/link";
import { AiOutlineStop } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { useSelector } from "react-redux";
import routes from "utils/constants/routes";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { useState } from "react";
import { Modal } from "antd";
import DTextArea from "components/UI/DTextArea/DTextArea";
import apiServices from "utils/services/apiServices";
import endpointUrls from "utils/constants/endpointUrls";
import { useDispatch } from "react-redux";
import { getUserRequestsList } from "redux/middlewares/request/getUserRequestsList";
import { BiMessageSquareDetail } from "react-icons/bi";
import { toast } from "react-toastify";

const statusList = {
  Pending: {
    name: "درحال بررسی",
    icon: <CgSandClock />,
    color: "text-d-text",
  },
  Responded: {
    name: "آماده پرداخت",
    icon: <MdOutlinePayment />,
    color: "text-d-text",
  },
  Rejected: {
    name: "رد شده",
    icon: <AiOutlineStop />,
    color: "text-d-text",
  },
  PurchaseRequested: {
    name: "سفارش تکمیل شده",
    icon: <BsCheckCircle />,
    color: "text-d-text",
  },
};

const RequestList = () => {
  //states
  const { requestList, loading } = useSelector((state) => state.request);
  const [addNoteId, setAddNoteId] = useState();
  const [addNoteLoading, setAddNoteLoading] = useState(false);
  const [note, setNote] = useState("");
  const [showNotes, setShowNotes] = useState(false);

  //hooks
  const dispatch = useDispatch();

  //functions
  const getStatus = (status) => {
    const result = statusList[status];
    return (
      <p
        className={`mb-0 ${result.color} flex items-center gap-x-2 font-medium `}
      >
        {result.icon}
        {result.name}
      </p>
    );
  };
  const getDate = (date) =>
    new DateObject({
      date: new Date(date),
      calendar: persian,
      locale: persian_fa,
    }).format("YYYY/MM/DD HH:mm");
  const sendNote = async () => {
    if (!note) return;
    setAddNoteLoading(true);
    const result = await apiServices.post(
      endpointUrls.addNoteToProductRequest,
      {
        ProductRequestId: addNoteId,
        Note: note,
      }
    );
    setAddNoteLoading(false);
    if (!result.isSuccess) return;
    setAddNoteId();
    setNote("");
    dispatch(getUserRequestsList());
    toast.success("یادداشت شما با موفقیت ثبت شد.");
  };

  return (
    <div className="">
      {!requestList && !loading && (
        <Empty title="محصولی به این لیست اضافه نشده">
          <Link href={routes.request.path} passHref>
            <a>
              <Button text="ثبت سفارش" />
            </a>
          </Link>
        </Empty>
      )}
      {requestList &&
        requestList.map((item) => {
          return (
            <div
              key={item.Id}
              className="p-2 mb-4 border rounded-md shadow-md border-d-border-gray"
            >
              <div className="flex flex-col justify-between pb-2 mb-2 border-b sm:flex-row">
                <p className="mb-0">{getStatus(item.Status)}</p>
                <p
                  className="mb-0 text-xs cursor-pointer text-d-primary"
                  onClick={() => setAddNoteId(item.Id)}
                >
                  + افزودن یادداشت
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <ShowInfo right="تاریخ ثبت" left={getDate(item.CreatedOnUtc)} />
                <ShowInfo right="لینک" left={item.ProductUrl} />
                <ShowInfo
                  right="قیمت"
                  left={
                    item.PriceValue
                      ? `${item.PriceValue} ${item.CurrencyCode}`
                      : "تعیین نشده"
                  }
                />
                <ShowInfo right="هزینه" left={item.Price || "تعیین نشده"} />

                {item.Notes?.length > 0 && (
                  <div
                    className="flex items-center cursor-pointer gap-x-2"
                    onClick={() => setShowNotes(item)}
                  >
                    <BiMessageSquareDetail />
                    یادداشت ها
                    <p className="px-2 mb-0 bg-gray-600 rounded-md text-d-bg-color ">
                      {item.Notes.length}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      <Modal
        visible={addNoteId}
        footer={false}
        title="افزودن یادداشت"
        onCancel={() => setAddNoteId()}
      >
        <DTextArea
          placeholder="یادداشت"
          rows={6}
          disabled={addNoteLoading}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <Button text="ثبت" loading={addNoteLoading} onClick={sendNote} />
        </div>
      </Modal>
      <Modal
        footer={false}
        visible={showNotes}
        onCancel={() => setShowNotes(false)}
        title="یادداشت ها"
      >
        <div className="flex flex-col gap-y-2">
          <p
            className="pb-2 border-b cursor-pointer text-d-primary"
            onClick={() => {
              setAddNoteId(showNotes.Id);
              setShowNotes(false);
            }}
          >
            + افزودن یادداشت
          </p>
          {showNotes &&
            showNotes.Notes.map((item) => {
              const userNote = (
                <div className="flex flex-col">
                  <small className="mb-0">
                    کاربر : {getDate(item.CreatedOn)}
                  </small>
                  <div
                    className="w-9/12 p-3 ml-auto bg-gray-200 rounded-tr-none rounded-xl"
                    key={item.Id}
                  >
                    {item.Note}
                  </div>
                </div>
              );
              const adminNote = (
                <div className="flex flex-col">
                  <small className="mb-0 mr-auto">
                    ادمین : {getDate(item.CreatedOn)}
                  </small>
                  <div
                    className="w-9/12 p-3 mr-auto text-left rounded-tl-none bg-sky-200 rounded-xl"
                    key={item.Id}
                  >
                    {item.Note}
                  </div>
                </div>
              );
              return item.CreatedByCustomer ? userNote : adminNote;
            })}
        </div>
      </Modal>
    </div>
  );
};

export default RequestList;
