const ShowInfo = ({ right, left, className, full, nowrap = true, notNormal = true, marginLeft }) => {
  return (
    <div className={`items-center mb-2 md:flex ${className} ${full && 'col-span-full w-full'}`}>
      <p className={`${notNormal ? 'ml-2' : `${marginLeft}`} ${nowrap && 'whitespace-nowrap'} text-gray-500`}>{right + ' : '}</p>
      <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{left}</p>
    </div>
  );
};

export default ShowInfo;
