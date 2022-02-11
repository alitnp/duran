import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getHomeCategories } from 'redux/middlewares/home/getHomeCategories';
import routes from 'utils/constants/routes';

const CategoryBar = () => {
  //states
  const { categories } = useSelector((state) => state.home);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    if (!categories) dispatch(getHomeCategories());
  }, []);

  return (
    <div className='flex justify-center py-4 my-4 border-t border-b md:justify-between'>
      <div className='flex overflow-hidden'>
        {categories &&
          categories.map((category, index) => {
            return (
              <div key={category.Id} className='flex items-center'>
                {index !== 0 && (
                  <div className='w-1.5 h-1.5 mx-3 rounded-full bg-d-text' />
                )}
                <Link href={routes.result.path + '?cid=' + category.Id} passHref>
                  <a className='cursor-pointer hover:underline'>
                    {category.Name}
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
      <div className='items-center hidden md:flex '>
        <p className='mb-0 ml-2 text-xs text-d-faded-text'>
          کفشت رو پیدا نکردی؟
        </p>
        <Link href={routes.request.path} passHref>
          <a ><span className='mb-0 text-d-primary'>سفارش کفش</span></a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryBar;
