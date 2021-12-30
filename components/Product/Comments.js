import { persianNum } from 'helpers/persianTools';

const Comments = ({ comments = [], total }) => {
	return (
		<div className=''>
			<div className='flex justify-between'>
				<span className='font-semibold'>نظرات - {persianNum(total)}</span>
				<span className='text-d-primary text-sm'>ثبت نظر</span>
			</div>
			{comments.map((comment, index) => {
				return (
					<div className='mt-3' key={index}>
						<div className='flex items-center'>
							<div className='flex items-center justify-center pb-1 w-9 h-9 rounded-full bg-indigo-200 '>
								{comment.sender[0]}
							</div>
							<span className='mr-2'>{comment.sender}</span>
						</div>
						<div className='bg-gray-200/50 px-2 py-3 rounded-md text-sm mt-2'>
							{comment.message}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Comments;
