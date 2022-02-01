import { Select } from 'antd';
const { Option } = Select;

const DOption = ({ children, ...props }) => {
  return <Option {...props}>{children}</Option>;
};

export default DOption;
