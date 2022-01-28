import { Rate } from 'antd';
import { useState } from 'react';

const Comments = ({ comments = [], overView, sendComment }) => {
	return (
		<div className=''>
			<div className='flex items-center justify-between'>
				<div>
					<p className='mb-0 font-semibold'>نظرات - {overView?.TotalReviews}</p>
					{overView && (
						<div className='flex items-center font-semibold gap-x-4'>
							<span>میانگین امتیاز :</span>
							<Rate disabled defaultValue={overView?.RatingSum} allowHalf />
						</div>
					)}
				</div>
				<p
					className='cursor-pointer hover:underline text-d-primary'
					onClick={sendComment}
				>
					ارسال نظر / امتیاز
				</p>
			</div>
			{comments.map((comment, index) => {
				return (
					<div className='mt-3' key={index}>
						<div className='flex items-center'>
							<div className='flex items-center justify-center pb-1 bg-indigo-200 rounded-full w-9 h-9 '>
								{comment.sender[0]}
							</div>
							<span className='mr-2'>{comment.sender}</span>
						</div>
						<div className='px-2 py-3 mt-2 text-sm rounded-md max-w-[100ch] bg-gray-200/50'>
							{comment.message}
						</div>
					</div>
				);
			})}
			<div className='flex justify-center pt-3 mt-2 border-t '>
				<p className='px-3 rounded-md cursor-pointer hover:underline bg-d-gray -skew-y-1'>
					نمایش بیشتر
				</p>
			</div>
		</div>
	);
};

export default Comments;
