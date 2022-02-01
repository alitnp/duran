import { Select } from 'antd';

const DSelect = ({ children, ...props }) => {
  return (
    <Select className='w-full' {...props}>
      {children}
    </Select>
  );
};

export default DSelect;
