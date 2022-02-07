import { Rate } from 'antd';
import { useState } from 'react';

const Comments = ({ comments = [], overView, sendComment, reviews }) => {
  return (
    <div className=''>
      <div className='flex items-center justify-between pb-2 mt-6 mb-2 border-b border-d-border-gray'>
        <div>
          <p className='mb-0 font-semibold'>نظرات</p>
        </div>
        <p
          className='mb-0 cursor-pointer hover:underline text-d-primary'
          onClick={sendComment}
        >
          ارسال نظر / امتیاز
        </p>
      </div>
      <div className='flex gap-x-2'>
        <p className='mb-0 text-sm'>تعداد : {overView?.TotalReviews}</p>
        {overView && (
          <div className='flex items-center text-sm gap-x-4'>
            {/* <span>میانگین امتیاز :</span>
            {overView?.RatingSum} */}
          </div>
        )}
      </div>
      {reviews &&
        reviews.Items.map((comment, index) => {
          return (
            <div className='mt-3' key={index}>
              <div className='flex items-center'>
                <div className='flex items-center justify-center text-sm bg-indigo-200 rounded-full w-9 h-9 '>
                  <p className='mb-0'>{comment.CustomerName[0]}</p>
                </div>
                <div className='flex flex-col mr-2'>
                  <span className='m-0'>{comment.CustomerName}</span>
                  <Rate
                    size='small'
                    disabled
                    value={comment.Rating}
                    style={{ fontSize: '0.75rem', margin: '0' }}
                  />
                </div>
              </div>

              {comment.ReviewText && (
                <div className='px-2 py-3 mt-2 text-xs rounded-lg max-w-[100ch] rounded-tr-none bg-gray-200/50'>
                  {comment.ReviewText}
                </div>
              )}
            </div>
          );
        })}
      {/* <div className='flex justify-center pt-3 mt-2 border-t '>
        <p className='px-3 rounded-md cursor-pointer hover:underline bg-d-gray -skew-y-1'>
          نمایش بیشتر
        </p>
      </div> */}
    </div>
  );
};

export default Comments;
