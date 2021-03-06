const Empty = ({ title, children }) => {
  return (
    <div className='flex items-center justify-center w-full py-6 my-4 border border-dashed border-d-border-gray'>
      <div className='flex flex-col items-center'>
        <img src='/icons/empty.svg' width='100px' height='100px' className='object-contain' />
        <p className='text-d-faded-text'>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Empty;
