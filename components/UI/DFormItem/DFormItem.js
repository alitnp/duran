import { Form } from 'antd';

const DFormItem = ({ children, ...props }) => {
	return (
		<Form.Item labelCol={{ span: 6 }} {...props}>
			{children}
		</Form.Item>
	);
};

export default DFormItem;
