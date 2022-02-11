import DInput from "components/UI/DInput/DInput";
import { FiArrowLeft } from "react-icons/fi";

const SubmitRequest = ({ submit, link, setLink }) => {
    //functions
    const inputKeyUp = (e) => { if (e.keyCode === 13) handleSubmit(); };
    const handleSubmit = () => {
        if (!link) return;
        submit();
    };

    return <div className="absolute flex flex-col items-center justify-center w-full h-full p-4">
        <h2 className='text-3xl font-bold text-center '>
            سفارش کفش از سایت های بزرگ دنیا
        </h2>
        <p className='my-4 text-sm font-medium leading-8 text-center w-80'>
            کفش مورد علاقتو تو بازار یا سایتای داخلی پیدا نمیکنی؟ دوران کفش مورد نظر
            شما رو ثبت سفارش میکنه و تو کمترین زمان درب منزل تحویل شما میده
        </p>
        <div className='flex w-full sm:w-8/12 max-w-[600px] mb-10'>
            <DInput
                placeholder='لینک صفحه کفش مورد نظر '
                className='w-full pr-4 border border-l-0 outline-none h-14 border-d-text'
                value={link}
                onChange={e => setLink(e.target.value)}
                onKeyUp={inputKeyUp}
            />
            <button className='flex items-center justify-center flex-shrink-0 text-2xl text-white w-14 bg-d-text h14 hover:bg-d-primary' onClick={handleSubmit}>
                <FiArrowLeft />
            </button>
        </div>
    </div>;
};

export default SubmitRequest;