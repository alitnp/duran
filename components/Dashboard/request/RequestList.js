import ShowInfo from 'components/Global/ShowInfo/ShowInfo';
import Button from 'components/UI/Button/Button';
import Empty from 'components/UI/Empty/Empty';
import Link from 'next/link';
import { AiOutlineStop } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import { CgSandClock } from 'react-icons/cg';
import { MdOutlinePayment } from 'react-icons/md';
import { useSelector } from 'react-redux';
import routes from 'utils/constants/routes';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from 'react-date-object';
import { useState } from 'react';
import { Modal } from 'antd';
import DTextArea from 'components/UI/DTextArea/DTextArea';
import apiServices from 'utils/services/apiServices';
import endpointUrls from 'utils/constants/endpointUrls';
import { useDispatch } from 'react-redux';
import { getUserRequestsList } from 'redux/middlewares/request/getUserRequestsList';


const statusList = {
    Pending: { name: "درحال بررسی", icon: <CgSandClock />, color: 'text-gray-400' },
    Responded: { name: "آماده پرداخت", icon: <MdOutlinePayment />, color: 'text-sky-600' },
    Rejected: { name: "رد شده", icon: <AiOutlineStop />, color: 'text-red-600' },
    PurchaseRequested: { name: "سفارش تکمیل شده", icon: <BsCheckCircle />, color: 'text-lime-600' },
};

const RequestList = () => {
    //states
    const { requestList } = useSelector(state => state.request);
    const [addNoteId, setAddNoteId] = useState();
    const [addNoteLoading, setAddNoteLoading] = useState(false);
    const [note, setNote] = useState("");

    //hooks
    const dispatch = useDispatch();

    //functions
    const getStatus = (status) => {
        const result = statusList[status];
        return <p className={`mb-0 ${result.color} flex items-center gap-x-2 font-medium`}>{result.icon}{result.name}</p>;
    };
    const getDate = (date) => new DateObject({
        date: new Date(date), calendar: persian,
        locale: persian_fa,
    }).format("YYYY/MM/DD dddd HH:mm");
    const sendNote = async () => {
        if (!note) return;
        setAddNoteLoading(true);
        const result = await apiServices.post(endpointUrls.addNoteToProductRequest, {
            ProductRequestId: addNoteId,
            Note: note
        });
        setAddNoteLoading(false);
        if (!result.isSuccess) return;
        setAddNoteId();
        setNote("");
        dispatch(getUserRequestsList());
    };

    return <div className=''>
        {!requestList && <Empty title='محصولی به این لیست اضافه نشده'>
            <Link href={routes.request.path} passHref>
                <a ><Button text='ثبت سفارش' /></a>
            </Link>
        </Empty>}
        {requestList && requestList.map(item => {
            return <div key={item.Id} className="p-2 mb-2 border rounded-md border-d-border-gray">
                <div className="pb-2 mb-2 border-b">{getStatus(item.Status)}</div>
                <div className="grid sm:grid-cols-2 gap-x-2">
                    <ShowInfo right="تاریخ ثبت" left={getDate(item.CreatedOnUtc)} />
                    <ShowInfo right="لینک" left={item.ProductUrl} />
                    <ShowInfo right="قیمت" left={item.PriceValue ? `${item.PriceValue} ${item.CurrencyCode}` : "تعیین نشده"} />
                    <ShowInfo right="هزینه" left={item.Price || "تعیین نشده"} />
                </div>
                <p className="cursor-pointer text-d-primary" onClick={() => setAddNoteId(item.Id)}>+ افزودن یادداشت</p>

            </div>;
        })}
        <Modal visible={addNoteId} footer={false} title="افزودن یادداشت" onCancel={() => setAddNoteId()}>
            <DTextArea placeholder="یادداشت" rows={6} disabled={addNoteLoading} value={note} onChange={e => setNote(e.target.value)} />
            <div className="flex justify-end mt-4">
                <Button text="ثبت" loading={addNoteLoading} onClick={sendNote} />
            </div>
        </Modal>
    </div>;
};

export default RequestList;