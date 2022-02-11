import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import endpointUrls from 'utils/constants/endpointUrls';
import routes from 'utils/constants/routes';

const BrandsList = () => {
  //states
  const { brandsList } = useSelector((state) => state.brands);
  console.log(brandsList);

  return (
    <div className=''>
      <div className=''></div>
      <div className='grid grid-cols-2 gap-4 mb-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {brandsList?.map((item) => (
          <Link href={routes.result.path + '?bid=' + item.Id} key={item.Id} passHref>
            <a className='flex flex-col items-center border shadow-md cursor-pointer'>
              <img
                src={endpointUrls.baseUrl + item.PictureModel.ImageUrl}
                className='object-contain '
              />
              <p className='py-2 m-0'>{item.NameFa}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
