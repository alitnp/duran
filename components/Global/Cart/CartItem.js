import { Separator } from 'utils/helpers/persianTools';
import Image from 'next/image';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItemFromCart,
} from 'redux/reducers/cartReducer/cartReducer';
import Tooltip2 from 'components/UI/Tooltip/Tooltip';
import endpointUrls from 'utils/constants/endpointUrls';

const CartItem = ({ info, index }) => {
  //hooks
  const dispatch = useDispatch();

  //functions
  const handleDelete = () => dispatch(removeItemFromCart(index));
  const handleIncrease = () => dispatch(increaseCartItemQuantity(index));
  const handleDecrease = () => dispatch(decreaseCartItemQuantity(index));

  return (
    <div className='flex flex-col items-center p-2 ml-6 mr-1 text-sm border rounded-md xs:flex-row h-fit border-d-border-gray '>
      <div className='relative ml-2 '>
        <Image
          src={endpointUrls.baseUrl + info.DefaultPictureModel.ImageUrl}
          width='80px'
          height='120px'
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col mx-auto '>
        <p>{info.NameFa}</p>
        <p>{info.NameEn}</p>
        <div className='flex gap-x-2'>
          <p className='flex items-center justify-center w-6 h-6 border'>
            {info.selectedSize && info.selectedSize.Name}
          </p>
          <p className='flex items-center justify-center px-3 border'>
            {info.selectedColor && info.selectedColor.Name}
          </p>
        </div>
        {/* <p>سایز : {info.sizes}</p> */}
        <p>قیمت : {Separator(info?.ProductPrice?.PriceValue)}</p>
        <div className='flex items-center mt-auto select-none'>
          <div className='flex items-center ml-auto '>
            <div
              className='ml-2 transition-all duration-500 ease-out rounded cursor-pointer bg-gray-200/70 hover:bg-gray-200 text-d-text'
              onClick={handleIncrease}
            >
              <HiPlus />
            </div>
            <p className='mb-0 text-lg'>{info.quantity}</p>
            <div
              className='mr-2 transition-all duration-500 ease-out rounded cursor-pointer bg-gray-200/70 hover:bg-gray-200 text-d-text'
              onClick={handleDecrease}
            >
              <HiMinus />
            </div>
          </div>
          <div
            className='text-lg cursor-pointer hover:text-red-300'
            onClick={handleDelete}
          >
            <Tooltip2 title='حذف این مورد'>
              <FiTrash2 />
            </Tooltip2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
