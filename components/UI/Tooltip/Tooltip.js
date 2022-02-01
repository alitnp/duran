import { Tooltip as AntTooltip } from 'antd';

const Tooltip = ({ children, title, ...props }) => {
  return (
    <AntTooltip title={title} {...props}>
      {children}
    </AntTooltip>
  );
};

export default Tooltip;
