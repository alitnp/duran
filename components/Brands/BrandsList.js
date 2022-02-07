import Image from 'next/image';
import { useSelector } from 'react-redux';
import endpointUrls from 'utils/constants/endpointUrls';

const BrandsList = () => {
  //states
  const { brandsList } = useSelector((state) => state.brands);
  console.log(brandsList);

  return (
    <div className=''>
      <div className=''></div>
      <div className='grid grid-cols-2 gap-4 mb-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {brandsList?.map((item) => (
          <div className='flex flex-col items-center border shadow-md'>
            <img
              src={endpointUrls.baseUrl + item.PictureModel.ImageUrl}
              className='object-contain '
            />
            <p className='py-2 m-0'>{item.NameFa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
